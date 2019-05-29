
export class FetchTurns {
    static readonly type = '[Turn] Fetch Actual Turn';
}

export class AddTurns {
    static readonly type = '[Turn] Add Turn';
    constructor(public payload: any) { }
}