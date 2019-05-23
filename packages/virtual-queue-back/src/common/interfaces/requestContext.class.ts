import { User } from '../../../database';
import { getNamespace } from 'node-request-context';
import { Request, Response } from 'express';

export class RequestContext {

    readonly id: number;

    constructor(public request: Request, public response: Response) {
        this.id = Math.random();
    }

    static currentRequestContext(): RequestContext {
        const namespace = getNamespace('retail.request');
        if (namespace) {
            const rc = namespace.get('tid');
            return rc;
        }
    }

    static currentRequest(): Request {
        const requestContext = RequestContext.currentRequestContext();
        if (requestContext) {
            return requestContext.request;
        }
    }

    static currentUser(): User |  undefined {
        const requestContext = RequestContext.currentRequestContext();
        if (requestContext) {
            console.log('entree');
            return (requestContext.request as any).user;
        }
    }

}