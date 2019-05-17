import { BranchOffice } from '@retail/shared/models/branchOffice.model';
import { Omit } from '@retail/shared/utils';

export class FetchBranchOffice {
    static readonly type = '[BranchOffice] Fetch All BranchOffices';
}
export class ChangeSelectBranch {
    static readonly type = '[BranchOfficeSelect] Change Selected BranchOfficeSelecteds';
    constructor(public payload: BranchOffice) { }
}
