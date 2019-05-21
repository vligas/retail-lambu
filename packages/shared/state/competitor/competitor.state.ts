import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Competitor } from '../../src/models';
import { AddCompetitor, FetchCompetitor, DeleteCompetitor, UpdateCompetitor, ChangeCompetitorId } from './competitor.actions';
import { CompetitorService } from '../../services/competitor.service';
import { tap } from 'rxjs/operators';

export class CompetitorStateModel {

    competitors: Competitor[];
    selectCompetitor: Competitor;

}

@State<CompetitorStateModel>({
    name: 'competitor',
    defaults: {
        competitors: [],
        selectCompetitor: null,

    }
})
export class CompetitorState {

    constructor(
        private competitorService: CompetitorService
    ) { }

    @Selector()
    static getAllCompetitors(state: CompetitorStateModel) {
        return state.competitors;
    }
    @Selector()
    static selectCompetitor(state: CompetitorStateModel) {
        return state.selectCompetitor;
    }

    @Action(AddCompetitor)
    add({ getState, patchState }: StateContext<CompetitorStateModel>, { payload }: AddCompetitor) {
        return this.competitorService.postCompetitor(payload).pipe(
            tap((resp) => {
                const state = getState();
                patchState({
                    competitors: [...state.competitors, resp.data]
                });
            })
        );
    }
    @Action(FetchCompetitor)
    fetch({ patchState }: StateContext<CompetitorStateModel>) {
        return this.competitorService.getAllCompetitors().pipe(
            tap((resp) => {
                patchState({
                    competitors: [...resp.data]
                });
            })
        );
    }
    @Action(ChangeCompetitorId)
    ChangeCompetitorId({ patchState }: StateContext<CompetitorStateModel>, { competitor }: ChangeCompetitorId) {
        return this.competitorService.getCompetitorById(competitor).pipe(
            tap((resp) => {
                patchState({
                    selectCompetitor: resp.data
                });
            })
        );
    }
    @Action(DeleteCompetitor)
    delete({ patchState, getState }: StateContext<CompetitorStateModel>, { payload }: DeleteCompetitor) {
        return this.competitorService.deleteCompetitor(payload).pipe(
            tap(resp => {
                const state = getState();
                patchState({
                    competitors: state.competitors.filter(competitor => competitor.id !== payload)
                });
            })
        );
    }
    @Action(UpdateCompetitor)
    update({ patchState, getState }: StateContext<CompetitorStateModel>, { id, payload }: UpdateCompetitor) {
        return this.competitorService.updateCompetitor(id, payload).pipe(
            tap(resp => {
                const state = getState();
                console.log('state', state);
                const currentCompetitor = state.competitors.find(competitor => {
                    return (competitor.id === id);
                });
                console.log('currentCompetitor', currentCompetitor);
                currentCompetitor.name = payload.name;
                patchState({
                    competitors: state.competitors
                });
            })
        );
    }





}