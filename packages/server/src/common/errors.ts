export class BaseHttpError extends Error{
    status: number;
}



export class AuthorizationError extends BaseHttpError {
    constructor() {
        super('Error de autorizacion');
        this.status = 403;
    }
}