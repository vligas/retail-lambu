import { RequestUpdateRoleDto, RequestCreateRoleDto } from '../../dto/auth.dto';

export class FetchRoles {
    private static readonly type = '[Role] Fetch all Roles';
    constructor(){}
}

export class UpdateRole {
    private static readonly type = '[Role] Update Role';
    constructor(public payload: {register: RequestUpdateRoleDto,  id: number}){}
}

export class CreateRole {
    private static readonly type = '[Role] Create Role';
    constructor(public payload: RequestCreateRoleDto){}
}

export class DeleteRole {
    private static readonly type = '[Role] Delete Role';
    constructor(public payload: number){}
}