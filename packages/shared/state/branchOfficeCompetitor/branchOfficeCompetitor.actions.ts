import { RequestCreateBranchOfficeDto, ResponseBranchOfficeDto } from '../../src/dto';

export class AddBranchCompetitor {
    static readonly type = '[BranchCompetitor] Add Branch Competitors';
    constructor(public payload: RequestCreateBranchOfficeDto) { }
}

export class FetchBranchCompetitor {
    static readonly type = '[BranchCompetitor] Fetch All Branch Competitors';
}

export class DeleteBranchCompetitor {
    static readonly type = '[BranchCompetitor] Delete Branch Competitor';
    constructor(public payload: number) { }
}

export class UpdateBranchCompetitor {
    static readonly type = '[BranchCompetitor] Update Branch Competitor';
    constructor(public id: number, public payload: ResponseBranchOfficeDto) { }
}
