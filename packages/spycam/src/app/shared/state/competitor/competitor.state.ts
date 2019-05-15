import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Competitor } from '../../models/competitor.model';
import { AddCompetitor, FetchCompetitor, DeleteCompetitor, UpdateCompetitor, FetchBrandCompetitor } from './competitor.actions';
import { CompetitorService } from '../../services/competitor.service';
import { tap } from 'rxjs/operators';
import { ResponseCompetitorDto, RequestCompetitorBrandDto } from '@frontend/app/shared/dto/competitor.dto';

export class CompetitorStateModel {

    competitors: Competitor[];
    actualBrand: RequestCompetitorBrandDto;

}

@State<CompetitorStateModel>({
    name: 'competitor',
    defaults: {

        competitors: [],
        actualBrand: { competitorId: 0, id: 0, location: '', name: '' },

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
    static getActualBrand(state: CompetitorStateModel) {
        return state.actualBrand;
    }

    @Action(AddCompetitor)
    add({ getState, patchState }: StateContext<CompetitorStateModel>, { payload }: AddCompetitor) {
        patchState({
            actualBrand: payload
        });
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
    update({ patchState, getState }: StateContext<CompetitorStateModel>, { payload }: UpdateCompetitor) {
        return this.competitorService.updateCompetitor(payload.id, payload).pipe(
            tap(resp => {
                const state = getState();
                console.log('state', state);
                const currentCompetitor = state.competitors.find(competitor => {
                    return (competitor.id === payload.id);
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