import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AddBranchCompetitor, UpdateBranchCompetitor, FetchBranchCompetitor, DeleteBranchCompetitor } from '../../state/branchOfficeCompetitor/branchOfficeCompetitor.actions';
import { BranchCompetitor } from '../../models/branchOfficeCompetitor.model';
import { BranchOfficeCompetitorService } from '../../services/branch-office-competitor.service';
import { ResponseBranchOfficeDto } from '../../dto/branchOffice.dto';
import { FetchCompetitor } from '../competitor/competitor.actions';

export class BranchCompetitorStateModel {

    branchCompetitors: ResponseBranchOfficeDto[];
    selectCompetitor: BranchCompetitor;

}

@State<BranchCompetitorStateModel>({
    name: 'branchCompetitor',
    defaults: {
        branchCompetitors: [],
        selectCompetitor: null
    }
})
export class BranchOfficeCompetitorState {

    constructor(
        private branchCompetitorService: BranchOfficeCompetitorService
    ) { }

    @Selector()
    static getAllCompetitors(state: BranchCompetitorStateModel) {
        return state.branchCompetitors;
    }

    @Action(AddBranchCompetitor)
    add({ getState, patchState }: StateContext<BranchCompetitorStateModel>, { payload }: AddBranchCompetitor) {
        return this.branchCompetitorService.postBranchOffice(payload).pipe(
            tap((resp) => {
                const state = getState();
                patchState({
                    branchCompetitors: [...state.branchCompetitors, resp.data]
                });
            })
        );
    }
    @Action(FetchBranchCompetitor)
    fetch({ patchState }: StateContext<BranchCompetitorStateModel>) {
        return this.branchCompetitorService.getAllBranchOffice().pipe(
            tap((resp) => {
                patchState({
                    branchCompetitors: [...resp.data]
                });
            })
        );
    }
    @Action(DeleteBranchCompetitor)
    delete({ patchState, getState }: StateContext<BranchCompetitorStateModel>, { payload }: DeleteBranchCompetitor) {
        return this.branchCompetitorService.deleteBranchOffice(payload).pipe(
            tap(resp => {
                const state = getState();
                patchState({
                    branchCompetitors: state.branchCompetitors.filter(competitor => competitor.id !== payload)
                });
            })
        );
    }
    @Action(UpdateBranchCompetitor)
    update({ patchState, getState }: StateContext<BranchCompetitorStateModel>, { id, payload }: UpdateBranchCompetitor) {
        return this.branchCompetitorService.updateBranchOffice(id, payload).pipe(
            tap(resp => {
                const state = getState();
                console.log('state', state);
                const currentCompetitor = state.branchCompetitors.find(competitor => {
                    return (competitor.id === id);
                });
                console.log('currentCompetitor', currentCompetitor);
                currentCompetitor.name = payload.name;
                patchState({
                    branchCompetitors: state.branchCompetitors
                });
            })
        );
    }





}