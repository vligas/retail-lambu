import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { FetchTag, UpdateTag, AddTag, DeleteTag, AddTagxProduct, DeleteTagxProduct } from './tag.actions';
import { TagService } from '../../services';
import { ResponseTagDto } from '../../dto';


export interface TagStateModel {
    tags: ResponseTagDto[];
    tagsxProduct: ResponseTagDto[];
}

@State<TagStateModel>({
    name: 'tag',
    defaults: {
        tags: [],
        tagsxProduct: []
    }
})

export class TagState {
    constructor(
        private store: Store,
        private tagService: TagService //tag services
    ) { }

    @Selector()
    static getTags(state: TagStateModel) {
        return state.tags;
    }


    @Action(FetchTag)
    FetchTag(stateContext: StateContext<TagStateModel>, actions: FetchTag) {

        if (!actions.payload) {
            return this.tagService.getAllTags().pipe(
                tap(resp => {
                    if (resp.data === null || resp.data === undefined) {
                        resp.data = [];
                    }
                    stateContext.patchState({ tags: [...resp.data] });
                }, err => { console.log(err); })
            );
        }
        console.log(actions.payload);

        return this.tagService.filterTags(actions.payload).pipe(
            tap(resp => {

                if (resp.data === null || resp.data === undefined) {
                    resp.data = [];
                }
                stateContext.patchState({ tags: [...resp.data] });
            }, err => { console.log(err); })
        );

    }

    @Action(AddTag)
    AddTag(stateContext: StateContext<TagStateModel>, actions: AddTag) {
        let oldTags = stateContext.getState().tags;
        return this.tagService.createTag(actions.payload).pipe(
            tap(resp => {
                stateContext.patchState({ tags: [...oldTags, resp.data] });
            }, err => { console.log(err); })
        );
    }

    @Action(UpdateTag)
    UpdateTag(stateContext: StateContext<TagStateModel>, actions: UpdateTag) {
        let oldTags = stateContext.getState().tags
        return this.tagService.updateTag(actions.payload).pipe(
            tap(resp => {
                if (resp.data === null || resp.data === undefined) {
                    resp.data = [];
                }
                stateContext.patchState({ tags: [...resp.data] });
            }, err => { console.log(err); })
        );
    }

    @Action(DeleteTag)
    DeleteTag(stateContext: StateContext<TagStateModel>, { payload }: DeleteTag) {
        return this.tagService.deleteTag(payload).pipe(
            tap(resp => {
                const state = stateContext.getState();
                stateContext.patchState({
                    tags: state.tags.filter(tag => tag.id !== payload)
                });
            })
        );
    }


    ///for TagProduct (nxm)
    @Action(AddTagxProduct)
    AddTagxProduct(stateContext: StateContext<TagStateModel>, actions: AddTagxProduct) {
        let oldTags = stateContext.getState().tags;
        return this.tagService.createTagWithProduct(actions.payload, actions.params).pipe(
            tap(resp => {
                let finder = stateContext.getState().tags.find(item => {
                    return item.id === resp.data.id;
                })
                if (!finder) {
                    stateContext.patchState({ tags: [...oldTags, resp.data] });
                }
            }, err => {
                console.log(err);
            })
        );
    }

    @Action(DeleteTagxProduct)
    DeleteTagxProduct(stateContext: StateContext<TagStateModel>, { payload }: DeleteTagxProduct) {
        return this.tagService.deleteTagProduct(payload.tagId, payload.productId);
    }



}


