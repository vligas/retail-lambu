
export class Login {
    static readonly type = '[Session] Log in';
    constructor(public payload: { username: string, password: string }) {

    }
}

export class Logout {
    static readonly type = '[Session] Log out';
}