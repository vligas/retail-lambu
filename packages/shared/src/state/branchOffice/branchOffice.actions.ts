import { BranchOffice } from '../../models';

export class FetchBranchOffice {
    static readonly type = '[BranchOffice] Fetch All BranchOffices';
}
export class ChangeSelectBranch {
    static readonly type = '[BranchOfficeSelect] Change Selected BranchOfficeSelecteds';
    constructor(public payload: BranchOffice) { }
}
