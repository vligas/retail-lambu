import { Category } from '../../models/category.model'
import { Omit } from '../../utils';

export class AddCategory {
    private static readonly type = '[Category] Add category';
    constructor(public payload: Omit<Category, 'id'>) { }
}

export class FetchCategory {
    private static readonly type = '[Category] Fetch all categories';
}

export class DeleteCategory {
    private static readonly type = '[Category] Delete category';
    constructor(public payload: number) { }
}

export class UpdateCategory {
    private static readonly type = '[Category] Update category';
    constructor(public payload: Category) { }
}

