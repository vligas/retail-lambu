import { RequestUpdateUserDto } from '../../src/dto';

export class FetchUsers {
    static readonly type = '[User] Fetch all Users';
    constructor() { }
}

export class UpdateUser {
    static readonly type = '[User] Update Users';
    constructor(public payload: { register: RequestUpdateUserDto, id: number }) { }
}
