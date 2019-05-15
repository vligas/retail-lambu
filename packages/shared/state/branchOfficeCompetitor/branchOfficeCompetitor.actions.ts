import { RequestCreateBranchOfficeDto, ResponseBranchOfficeDto } from '@frontend/app/shared/dto/branchOffice.dto';

export class AddBranchCompetitor {
    private static readonly type = '[BranchCompetitor] Add Branch Competitors';
    constructor(public payload: RequestCreateBranchOfficeDto) { }
}

export class FetchBranchCompetitor {
    private static readonly type = '[BranchCompetitor] Fetch All Branch Competitors';
}

export class DeleteBranchCompetitor {
    private static readonly type = '[BranchCompetitor] Delete Branch Competitor';
    constructor(public payload: number) { }
}

export class UpdateBranchCompetitor {
    private static readonly type = '[BranchCompetitor] Update Branch Competitor';
    constructor(public id: number, public payload: ResponseBranchOfficeDto) { }
}
