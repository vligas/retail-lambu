import { Sequelize } from 'sequelize-typescript';
import { config } from '@retail/common/src/config/config.service';

export const DATABASE = 'DataBase';
export const databaseProviders = [
    {
         /*Connection to the database*/
        provide:  DATABASE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                username: config.get('DB_USERNAME'),
                password: config.get('DB_PASSWORD'),
                dialect: 'mssql',
                host: config.get('DB_HOST'),
                logging: false,
                // tslint:disable-next-line:ban
                port: parseInt(config.get('DB_PORT'), 10),
                database: config.get('DB_NAME'),
                benchmark: true,
                modelPaths: [__dirname + '/models/**/*.entity.{ts,js}'],
                modelMatch: (filename, member) => {
                    return filename.substring(0, filename.indexOf('.entity')).toLocaleLowerCase() === member.toLowerCase();
                },
            });
            await sequelize.authenticate();
            return sequelize;
        },
    },
];
