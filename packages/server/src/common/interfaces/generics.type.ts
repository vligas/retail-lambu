export type ThenArg<T> = T extends Promise<infer U> ? U : T;
// tslint:disable-next-line:no-any
export class ResponseFormat<T> {
    data: T;

    constructor() {

    }
}