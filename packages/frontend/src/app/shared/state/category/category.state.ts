import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Category } from '@retail/shared/models/category.model';
import { AddCategory, DeleteCategory, FetchCategory, UpdateCategory } from './category.actions';
import { CategoryService } from '../../services/category.service';
import { tap } from 'rxjs/operators';

export class CategoryStateModel {
    categories: Category[];
}

@State<CategoryStateModel>({
    name: 'category',
    defaults: {
        categories: []
    }
})
export class CategoryState {

    constructor(
        private categoryService: CategoryService
    ) { }

    @Selector()
    static getCategories(state: CategoryStateModel) {
        return state.categories;
    }

    @Action(AddCategory)
    add({ getState, patchState }: StateContext<CategoryStateModel>, { payload }: AddCategory) {
        return this.categoryService.postCategory(payload).pipe(
            tap((resp) => {
                const state = getState();
                patchState({
                    categories: [...state.categories, resp.data]
                });
            })
        );
    }
    @Action(FetchCategory)
    fetch({ patchState }: StateContext<CategoryStateModel>) {
        return this.categoryService.getAllCategories().pipe(
            tap((resp) => {
                patchState({
                    categories: [...resp.data]
                });
            })
        );
    }
    @Action(DeleteCategory)
    delete({ patchState, getState }: StateContext<CategoryStateModel>, { payload }: DeleteCategory) {
        return this.categoryService.deleteCategory(payload).pipe(
            tap(resp => {
                const state = getState();
                patchState({
                    categories: state.categories.filter(category => category.id !== payload)
                });
            })
        );
    }
    @Action(UpdateCategory)
    update({ patchState, getState }: StateContext<CategoryStateModel>, { payload }: UpdateCategory) {
        return this.categoryService.updateCategory(payload.id, payload).pipe(
            tap(resp => {
                const state = getState();
                const currentCategory = state.categories.find(category => {
                    return (category.id === payload.id);
                });

                currentCategory.description = payload.description;
                currentCategory.code = payload.code;
                patchState({
                    categories: state.categories
                });
            })
        );
    }
}