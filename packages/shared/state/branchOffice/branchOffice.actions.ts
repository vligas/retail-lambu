import { BranchOffice } from '@frontend/app/shared/models/branchOffice.model';
import { Omit } from '../../utils';

export class FetchBranchOffice {
    private static readonly type = '[BranchOffice] Fetch All BranchOffices';
}
export class ChangeSelectBranch {
    private static readonly type = '[BranchOfficeSelect] Change Selected BranchOfficeSelecteds';
    constructor(public payload: BranchOffice) { }
}
