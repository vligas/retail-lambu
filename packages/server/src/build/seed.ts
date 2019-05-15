import { bootstrap } from './main';
import { readdirSync, readFileSync, writeFile, writeFileSync } from 'fs';
import { INestApplication } from '@nestjs/common';
import { logger } from 'src/common/services/logger.service';
import { resolve } from 'path';
import { order } from './seeds';
import 'reflect-metadata';
import { camelize, formatTemplate } from 'src/common/utils';

const seedsPath = './seeds';
const templatePath = './templates';
const seedsDir = resolve(__dirname, seedsPath);

export async function seedsCommand() {
    let app: INestApplication;

    const cmd = process.argv[2].trim();
    if (cmd !== 'new') {
        app = await bootstrap();
    }

    switch (cmd) {
        case 'all':
            const seeds = order;
            for (const SeedClass of seeds) {
                // logger.info(`[seed start]\t${SeedClass.name}`);
                const paramsTypes = Reflect.getMetadata('self:paramtypes', SeedClass);
                const params = [];
                for (const paramType of paramsTypes) {
                    params.push(app.get(paramType.param));
                }
                const algo = new (SeedClass as any)(...params.reverse());
                await algo.run();
                logger.info(`[seed end]\t✅🙈 ${SeedClass.name}`);
            }
            break;
        case 'new':
            const name = process.argv[3].trim();
            const className = `${camelize(name)}Seeder`;
            const seederTemplate = readFileSync(resolve(__dirname, templatePath, 'seeder.template.txt'), 'utf-8');
            const seederContent = formatTemplate(seederTemplate, {
                className
            });
            writeFileSync(resolve(seedsDir, `${name}.seeder.ts`), seederContent);

            break;
        default:
            logger.error('comando invalido');

    }
    process.exit();
}

seedsCommand();