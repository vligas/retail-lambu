import { Tag } from '@retail/shared/models/tag.model'
import { Omit } from '@retail/shared/utils';

export class AddTag {
    static readonly type = '[Tag] Add tag';
    constructor(public payload: Omit<Tag, 'id'>) { }
}

export class FetchTag {
    static readonly type = '[Tag] Fetch all tags';
    constructor(public payload?: Omit<Tag, 'id'>) { }
}

export class DeleteTag {
    static readonly type = '[Tag] Delete tag';
    constructor(public payload: number) { }
}

export class UpdateTag {
    static readonly type = '[Tag] Update tag';
    constructor(public payload: Tag) { }
}

/// For tagProduct (nxm)
export class AddTagxProduct {
    static readonly type = '[TagxProduct] Add Tag For Product';
    constructor(public payload: Omit<Tag, 'id'>, public params: string) { }
}

export class DeleteTagxProduct {
    static readonly type = '[TagxProduct] Delete Tag For Product';
    constructor(public payload: { tagId: number, productId: number }) { }
}

