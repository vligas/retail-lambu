
import { RequestCreateCompetitorDto, RequestUpdateCompetitorDto, ResponseCompetitorDto } from '../../src/dto';


export class AddCompetitor {
    static readonly type = '[Competitor] Add Competitor';
    constructor(public payload: RequestCreateCompetitorDto) { }
}

export class FetchCompetitor {
    static readonly type = '[Competitor] Fetch All Competitors';
}

export class ChangeCompetitorId {
    static readonly type = '[Competitor] Fetch Select CompetitorSelecteds';
    constructor(public competitor: number) { }
}

export class DeleteCompetitor {
    static readonly type = '[Competitor] Delete Competitor';
    constructor(public payload: number) { }
}

export class UpdateCompetitor {
    static readonly type = '[Competitor] Update competitor';
    constructor(public id: number, public payload: RequestUpdateCompetitorDto) { }
}
