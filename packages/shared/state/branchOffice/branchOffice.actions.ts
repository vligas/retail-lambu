import { BranchOffice } from '../../models/branchOffice.model';

export class FetchBranchOffice {
    static readonly type = '[BranchOffice] Fetch All BranchOffices';
}
export class ChangeSelectBranch {
    static readonly type = '[BranchOfficeSelect] Change Selected BranchOfficeSelecteds';
    constructor(public payload: BranchOffice) { }
}
