import { Injectable, Inject, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RouteUser } from 'src/database/models/VAD10/routerUser/routeUser.entity';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { User } from 'src/database/models/VAD10/user/user.entity';
import { BranchOffice } from 'src/database/models/VAD10/branchOffice/branchOffice.entity';
import { RequestCreateBranchOfficeDto } from '../branch-office/branchOffice.dto';
import { DATABASEVAD10 as DATABASE } from 'src/database/database.providers';
import { RequestToAssignRouterDto, RequestUpdateRouterDto } from './route.dto';
import { logger } from 'src/common/services/logger.service';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class RouteService {

    constructor(
        @Inject(RouteUser) private readonly routerUserRepository: typeof RouteUser,
        @Inject(User) private readonly userRepository: typeof User,
        @Inject(BranchOffice) private readonly branchOfficeRepository: typeof BranchOffice,
        @Inject(DATABASE) private readonly db: Sequelize
    ){}

    async all(){
        return await this.userRepository.findAll({
            attributes: ['id', 'userId', 'codusuario', 'login_name', 'descripcion'],
            include: [
                {
                    model: this.branchOfficeRepository
                }
            ]
        });
    }


    async byUser(userId: number, options: ServiceOptions){
        return await this.userRepository.findOne({
            attributes: ['id', 'userId', 'codusuario', 'login_name', 'descripcion'],
            where: {
                id: userId
            },
            include: [
                {
                    model: this.branchOfficeRepository
                }
            ]
        });
    }


    async create(userId: number, userRoutes: RequestUpdateRouterDto) {
        
        let transaction;
        try {
            const brachs = userRoutes.branchOffices.map(p => this.branchOfficeRepository.build(p));
            transaction = await this.db.transaction();
            const user = await this.userRepository.findOne({
                where: {
                    id: userId
                }
            });
            await (user as any).setBranchOffices(brachs, { transaction });
            await transaction.commit();
            return user;
        }
        catch (e) {
            logger.error(e.message);
            await transaction.rollback();
            throw new InternalServerErrorException();
        }
    }

    async update(userId: number, userRoutes: RequestUpdateRouterDto) {
        let transaction;

        try {
            transaction = await this.db.transaction();
            const user = await this.userRepository.findOne({ where: { id: userId }, transaction });
            if (!user) {
                throw new NotFoundException();
            }
            if (userRoutes.branchOffices !== undefined) {
                const branchOffices = userRoutes.branchOffices.map(p => this.branchOfficeRepository.build(p));
                await (user as any).setBranchOffices(branchOffices, { transaction });
            }
            // const [, result] = await this.userRepository.update(userRoutes, { where: { id: userId }, transaction });
            await transaction.commit();
            return this.all();
        }
        catch (e) {
            logger.error(e.message);
            await transaction.rollback();
            throw new InternalServerErrorException();
        }
    }
}
