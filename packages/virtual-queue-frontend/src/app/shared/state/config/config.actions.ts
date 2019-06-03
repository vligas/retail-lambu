import { RequestUpdateMediaConfigDto } from '@retail/shared';

export class FetchConfig {
    static readonly type = '[Config] Fetch Config';
}

export class UpdateConfig {
    static readonly type = '[Config] Update Config';
    constructor(public payload: RequestUpdateMediaConfigDto) { }
}