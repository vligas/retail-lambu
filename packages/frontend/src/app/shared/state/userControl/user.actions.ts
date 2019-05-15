import { RequestUpdateUserDto } from '../../dto/user.dto';

export class FetchUsers {
    private static readonly type = '[User] Fetch all Users';
    constructor(){}
}

export class UpdateUser {
    private static readonly type = '[User] Update Users';
    constructor(public payload: {register: RequestUpdateUserDto,  id: number}){}
}
