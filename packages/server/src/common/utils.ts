
export const exp: RegExp = new RegExp('[_]'); // la idea es que rompa cuando consiga algo que no sea letras o numeros
export const MapTypes = {
    ABSTRACT: 'string',
    STRING: 'string',
    CHAR: 'string',
    TEXT: 'string',
    NUMBER: 'number',
    TINYINT: 'number',
    SMALLINT: 'number',
    MEDIUMINT: 'number',
    INTEGER: 'number',
    BIGINT: 'number',
    FLOAT: 'number',
    TIME: 'Date',
    DATE: 'Date',
    DATEONLY: 'Date',
    BOOLEAN: 'boolean',
    NOW: 'string',
    BLOB: 'string',
    DECIMAL: 'number',
    NUMERIC: 'number',
    UUID: 'string',
    UUIDV1: 'string',
    UUIDV4: 'string',
    HSTORE: 'string',
    JSON: 'string',
    JSONB: 'string',
    VIRTUAL: 'string',
    ARRAY: 'string',
    NONE: 'string',
    ENUM: 'string',
    RANGE: 'string',
    REAL: 'number',
    DOUBLE: 'number',
    'DOUBLE PRECISION': 'number',
    GEOMETRY: 'string'
};
/**
 * Apply CamelCase to string
 * @param text string to apply camelCase
 * @param prefix keep the prefix(TRUE)
 * @param upperCase UpperCase(TRUE) or lowerCase(false)
 */
export function camelize(text: string, prefix = true, upperCase = true) {
    const partText: string[] = text.split(exp);
    let str = '';
    for (let i = ((prefix) ? 0 : 1); i < partText.length; i++) {
        const part: string = partText[i].charAt(0).toUpperCase() + partText[i].slice(1).toLowerCase();
        str += part;
    }
    if (!upperCase) {
        str = str.charAt(0).toLowerCase() + str.slice(1);
    }
    return str;
}


export function formatTemplate(template: string, dict: {}): string {
    let result = template;

    // tslint:disable-next-line: forin
    for (const key in dict) {
        const value = dict[key];
        const regxp = new RegExp('\\$\\{' + key + '\\}', 'g');
        result = result.replace(regxp, value);
    }

    return result;
}

export function convertTypesToTs(oType: string) {
    const mTypes: string = oType.toString().toUpperCase();
    return MapTypes[mTypes];
}

export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
