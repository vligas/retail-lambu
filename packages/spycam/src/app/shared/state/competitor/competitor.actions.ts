import { Competitor } from '../../models/competitor.model';
import { Omit } from '../../utils';
import { RequestCreateCompetitorDto, RequestUpdateCompetitorDto, RequestCompetitorBrandDto } from '../../dto/competitor.dto';

export class AddCompetitor {
    static readonly type = '[Competitor] Add Competitor';
    constructor(public payload: RequestCompetitorBrandDto) { }
}

export class FetchCompetitor {
    static readonly type = '[Competitor] Fetch All Competitors';
}

export class DeleteCompetitor {
    static readonly type = '[Competitor] Delete Competitor';
    constructor(public payload: number) { }
}

export class UpdateCompetitor {
    static readonly type = '[Competitor] Update competitor';
    constructor(public payload: RequestUpdateCompetitorDto) { }
}

export class FetchBrandCompetitor {
    static readonly type = '[Competitor] fecth branch';
    constructor() { }
}