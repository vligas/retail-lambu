import { Turn } from '../../models/turn.model';

export class FetchTurns {
    static readonly type = '[Turn] Fetch Actual Turn';
}

export class AddTurns {
    static readonly type = '[Turn] Set Turn';
    constructor(public data: any) { }
}

export class UpdateTurns {
    static readonly type = '[Turn] Update Turn';
    constructor(public data: Partial<Turn>) { }
}