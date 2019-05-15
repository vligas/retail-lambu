import * as mapSource from './oldModel/MA_UNIDADES';
import * as sequelize from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../../common/services/logger.service';
import { write } from 'fs-extra';
import { camelize, formatTemplate, convertTypesToTs } from '../../common/utils';
import { throwError } from 'rxjs';
const promisify = require('util').promisify;
const writeFile = promisify(fs.writeFile);
const mkdirp = promisify(require('mkdirp'));

const destPath: string = 'src/database/models/stellar';

// console.log(convertTypesToTs('datetime2')); // para probar el mapeo de los types
mapTable();
/**
 * Process map
 */
function mapTable() {

    const migrations = fs.readdirSync(path.resolve(__dirname, './oldModel')).filter(fileName => fileName !== 'index.js')
    for (const migrationName of migrations) {
        const mapSource = require(path.resolve(__dirname, './oldModel', migrationName))
        mapSource({
            define: async function (...args) {
                let tableName: string = args[2].tableName; // tercer parametro es el tablename
                let map: object[] = args[1];
                let columns: string[] = Object.keys(map);
                let allColumns: object[] = [];

                columns.forEach(property => {
                    let colum: object = map[property]; // columna de sequelize
                    try {
                        let obj: object = { // columna limpia
                            name: property,
                            type: colum['type'].key.toLowerCase(),
                            isNull: colum['allowNull'],
                            defaultValue: colum['defaultValue'],
                            primaryKey: (!colum['primaryKey']) ? false : true// aveces viene undefined
                        };
                        allColumns.push(obj);
                    }
                    catch (e) {
                        console.log('ERRRORRR')
                        console.log(colum)
                    }
                })

                let table: object = {
                    tableName: tableName,
                    columns: allColumns
                };
                // console.log(table);
                await mkdirp(destPath);
                templateMap(table);


            }
        }, sequelize);
    }
    /**
     * Map Table
     */
}

/**
 * make file <name>.entity.ts
 * @param table : info Table to Map 
 */
async function templateMap(table) {
    try {
        let fileName = camelize(table.tableName, true, false);
        let className = camelize(table.tableName, true, true);

        let head: string = `import { Table, Column ,Model, Unique } from 'sequelize-typescript';\n`
        head += `import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'\n`
        head += `import { ExtendedModel } from 'src/common/interfaces/extendedModel';\n`
        head += `\n@Table({\n\ttableName: '${table.tableName}',\n})\n`
        head += `export class ${className} extends ExtendedModel<${className}> {\n`
        head += `\tprotectedTable = true\n`
        
        let columns: any[] = table.columns;
        let body: string = '';
        for (let i = 0; i < columns.length; i++) {
            let column: any = columns[i];
            /* if (column.type === 'date') {
                column.type = 'Date';
            } */
            let oldColumn= column.type;
            column.type= convertTypesToTs(column.type);
            if(column.type === undefined)
                throw new Error('Err: column type is undefined '+ oldColumn);

            body += `\n\t@Column${column.primaryKey || column.name.toLowerCase() === 'id' ? '({primaryKey: true})' : ''}\n\t@ProtectedColumn\n\t${column['name']}: ${column['type']};\n`
        }
        body = head + body + '}';

        logger.info(`generated - ${fileName}`)
        let entityUrl: string = `${destPath}/${fileName}/${fileName}.entity.ts`;
        let providerUrl: string = `${destPath}/${fileName}/${fileName}.provider.ts`

        await mkdirp(`${destPath}/${fileName}`)
        const providerTemplate = fs.readFileSync(path.resolve(__dirname, '../templates/provider.template.txt'), 'utf-8')
        const providerContent = formatTemplate(providerTemplate, {
            className,
            fileName
        })
        writeFile(entityUrl, body);
        writeFile(providerUrl, providerContent)
    } catch (err) {
        console.log(err);
    }
    
}

