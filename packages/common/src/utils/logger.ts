import * as winston from 'winston';

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        // new winston.transports.File({

        // })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.simple()
    )
});