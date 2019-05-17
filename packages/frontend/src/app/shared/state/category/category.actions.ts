import { Category } from '@retail/shared/models/category.model'
import { Omit } from '@retail/shared/utils';

export class AddCategory {
    static readonly type = '[Category] Add category';
    constructor(public payload: Omit<Category, 'id'>) { }
}

export class FetchCategory {
    static readonly type = '[Category] Fetch all categories';
}

export class DeleteCategory {
    static readonly type = '[Category] Delete category';
    constructor(public payload: number) { }
}

export class UpdateCategory {
    static readonly type = '[Category] Update category';
    constructor(public payload: Category) { }
}

