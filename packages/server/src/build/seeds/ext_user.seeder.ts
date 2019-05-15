import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Sequelize } from 'sequelize-typescript';
import { DATABASEVAD10 } from 'src/database/database.providers';
import { User } from 'src/database/models/VAD10/user/user.entity';

export default class ExtUserSeeder implements SeedInterface {
    constructor(
        @Inject(DATABASEVAD10) private db: Sequelize,
        @Inject(User) private userRepository: typeof User
    ) {

    }

    async run() {
        const users = await this.userRepository.findAll();
        let values = '';
        let count = 1;
        for (const user of users) {
            values += ` ('${user.codusuario}'),`;

            if (count % 1000 === 0) {
                values = values.substr(0, values.length - 1);
                values += ';';
                await this.db.query(`INSERT INTO L0200exUser (userId)
                    VALUES ${values}`);

                values = '';
            }
            count++;
        }

        if (values.length > 0) {
            values = values.substr(0, values.length - 1);
            values += ';';
            await this.db.query(`INSERT INTO L0200exUser (userId)
                VALUES ${values}`);
        }

    }
}