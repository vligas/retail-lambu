
export class FetchTurns {
    static readonly type = '[Turn] Fetch Actual Turn';
}

export class AddTurns {
    static readonly type = '[Turn] Set Turn';
    constructor(public payload: any) { }
}