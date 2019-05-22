import 'reflect-metadata';

export const protectedColumns = Symbol('protectedColumns');

// tslint:disable-next-line:no-any
export function ProtectedColumn(target: {}, propertyKey: string, descriptor?: TypedPropertyDescriptor<Function>): void {
    const columns: string[] = Reflect.getOwnMetadata(protectedColumns, target) || [];
    columns.push(propertyKey);
    Reflect.defineMetadata(protectedColumns, columns, target);
}