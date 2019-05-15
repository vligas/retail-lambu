
import { RequestCreateCompetitorDto, RequestUpdateCompetitorDto, ResponseCompetitorDto } from '../../dto/competitor.dto';
import { Competitor } from '@frontend/app/shared/models/competitor.model';


export class AddCompetitor {
    private static readonly type = '[Competitor] Add Competitor';
    constructor(public payload: RequestCreateCompetitorDto) { }
}

export class FetchCompetitor {
    private static readonly type = '[Competitor] Fetch All Competitors';
}

export class ChangeCompetitorId{
    private static readonly type = '[Competitor] Fetch Select CompetitorSelecteds';
    constructor(public competitor: number) { }
}

export class DeleteCompetitor {
    private static readonly type = '[Competitor] Delete Competitor';
    constructor(public payload: number) { }
}

export class UpdateCompetitor {
    private static readonly type = '[Competitor] Update competitor';
    constructor(public id: number, public payload: RequestUpdateCompetitorDto) { }
}
