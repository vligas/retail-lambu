import { Injectable, Inject, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Role } from 'src/database/models/VAD10/role/role.entity';
import { Permission } from 'src/database/models/VAD10/permission/permission.entity';
import { RequestCreateRoleDto, RequestUpdateRoleDto } from './auth.dto';
import { DATABASEVAD10 } from 'src/database/database.providers';
import { Sequelize } from 'sequelize-typescript';
import sequelize = require('sequelize');
// import { logger } from 'src/common/services/logger.service';

@Injectable()
export class RoleService {
    constructor(
        @Inject(Role) private readonly roleRepository: typeof Role,
        @Inject(Permission) private readonly permissionRepository: typeof Permission,
        @Inject(DATABASEVAD10) private readonly db: Sequelize
    ) { }

    async all() {
        return await this.roleRepository.findAll({
            include: [{
                model: this.permissionRepository,
                as: 'permissions',
                through: {
                    attributes: []
                }
            }]
        });
    }

    async one(id: number) {
        return await this.roleRepository.findOne({
            where: {
                id
            },
            include: [{
                model: Permission,
                as: 'permissions',
                through: {
                    attributes: []
                }
            }]
        });

    }

    async allPermissions() {
        return await this.permissionRepository.findAll();
    }

    async update(id: number, role: RequestUpdateRoleDto) {
        let transaction;

        try {
            transaction = await this.db.transaction();
            const dbRole = await this.roleRepository.findOne({ where: { id }, transaction });
            if (!dbRole) {
                throw new NotFoundException();
            }
            if (role.permissions !== undefined) {
                const permissions = role.permissions.map(p => this.permissionRepository.build(p));
                await (dbRole as any).setPermissions(permissions, { transaction });
            }
            const [, result] = await this.roleRepository.update(role, { where: { id }, transaction });
            await transaction.commit();
            return this.all();
        }
        catch (e) {
            console.error(e.message);
            await transaction.rollback();
            throw new InternalServerErrorException();
        }
    }

    async create(role: RequestCreateRoleDto) {
        let transaction;
        try {
            const permissions = role.permissions.map(p => this.permissionRepository.build(p));
            transaction = await this.db.transaction();
            const dbRole = await this.roleRepository.create(role, { transaction });
            await (dbRole as any).setPermissions(permissions, { transaction });
            await transaction.commit();
            return dbRole;
        }
        catch (e) {
            console.error(e.message);
            await transaction.rollback();
            throw new InternalServerErrorException();
        }
    }

    async deleteRol(id: number) {
        const role = await this.one(id);
        await role.destroy();
    }
}