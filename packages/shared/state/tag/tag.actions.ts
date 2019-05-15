import { Tag } from '../../models/tag.model'
import { Omit } from '../../utils';

export class AddTag {
    private static readonly type = '[Tag] Add tag';
    constructor(public payload: Omit<Tag, 'id'>) { }
}

export class FetchTag {
    private static readonly type = '[Tag] Fetch all tags';
    constructor(public payload?: Omit<Tag, 'id'>) { }
}

export class DeleteTag {
    private static readonly type = '[Tag] Delete tag';
    constructor(public payload: number) { }
}

export class UpdateTag {
    private static readonly type = '[Tag] Update tag';
    constructor(public payload: Tag) { }
}

/// For tagProduct (nxm)
export class AddTagxProduct {
    private static readonly type = '[TagxProduct] Add Tag For Product';
    constructor(public payload: Omit<Tag, 'id'>, public params: string) { }
}

export class DeleteTagxProduct {
    private static readonly type = '[TagxProduct] Delete Tag For Product';
    constructor(public payload: { tagId: number, productId: number }) { }
}

