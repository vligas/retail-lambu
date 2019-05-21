import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { User } from 'src/database/models/VAD10/user/user.entity';
import * as bcrypt from 'bcrypt';
import { RequestCreateUserDto, RequestUpdateUserDto } from './user.dto';
import { Role } from 'src/database/models/VAD10/role/role.entity';
import { Permission } from 'src/database/models/VAD10/permission/permission.entity';
import { uniqBy, prop } from 'ramda';
import { DATABASEVAD10 } from 'src/database/database.providers';
import { MaSucursales } from 'src/database/models/VAD10/stellar/maSucursales/maSucursales.entity';
@Injectable()
export class UserService {
    saltRounds = 10;


    constructor(
        @Inject(User) private readonly userRepository: typeof User,
        @Inject(Role) private readonly roleRepository: typeof Role,
        @Inject(Permission) private readonly permissionRepository: typeof Permission,
        @Inject(MaSucursales) private readonly sucursalRepository: typeof MaSucursales,
       @Inject(DATABASEVAD10) private readonly db: Sequelize
    ) { }


    async all() {
        return await this.userRepository.findAll({
            attributes: ['id', 'userId', 'codusuario', 'login_name', 'descripcion'],
            include: [{
                model: this.roleRepository,
                through: {
                    attributes: []
                }
            }]
        });
    }

    async one(id: number) {
        const user = await this.userRepository.findOne({
            attributes: ['id', 'userId', 'codusuario', 'login_name', 'descripcion'],

            where: {
                id
            },
            include: [{
                model: this.roleRepository,
                through: {
                    attributes: []
                },
                include: [{
                    model: this.permissionRepository,
                    through: {
                        attributes: []
                    }
                }]
            }, {
                model: this.permissionRepository,
                through: {
                    attributes: []
                }
            }]
        });
        return user;
    }

    async update(id: number, user: RequestUpdateUserDto) {
        let transaction: any;
        try {
            transaction = await this.db.transaction();
            const dbUser = await this.userRepository.findOne({ where: { id }, transaction });
            if (!dbUser) {
                throw new NotFoundException();
            }

            if (user.roles) {
                const roles = this.roleRepository.bulkBuild(user.roles);
                await dbUser.$set('roles', roles, { transaction });
            }

            if (user.permissions) {
                const permissions = this.permissionRepository.bulkBuild(user.permissions);
                await dbUser.$set('permissions', permissions, { transaction });
            }

            await transaction.commit();
        }
        catch (e) {
            await transaction.rollback();
            throw e;
        }

        return await this.one(id);
    }

    async getPermissions(username: string) {
        const rolePermissions = await this.userRepository.findOne({
            where: {
                login_name: username
            },
            include: [
                {
                    model: this.roleRepository,
                    through: {
                        attributes: []
                    },
                    include: [{
                        model: this.permissionRepository,
                        through: {
                            attributes: []
                        }
                    }]
                }, 
                {
                    model: this.permissionRepository,
                    through: {
                        attributes: []
                    },
                }
            ]
        });

        let result = [];
        rolePermissions.roles.forEach(rol => {
            result = [...result, ...rol.permissions.map(p => p.toJSON())];
        });

        rolePermissions.permissions.forEach(p => {
            result = [...result, p];
        });

        return uniqBy(prop('id'), result);
    }

    async getByUsername(username: string) {
        return await this.userRepository.findOne({
            where: {
                login_name: username
            },
            include: [{
                model: this.sucursalRepository
            }]
        });
    }

    async create(register: RequestCreateUserDto) {
        //register.password = await this.getHash(register.password);
        return await this.userRepository.create(register);
    }

    async delete(id: number) {
        const user = await this.one(id);
        await user.destroy();
    }

    async getHash(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async compareHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

}