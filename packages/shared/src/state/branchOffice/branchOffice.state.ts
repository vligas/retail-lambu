import { State, Action, StateContext, Selector } from '@ngxs/store';
import { BranchOffice } from '../../models';
import { FetchBranchOffice, ChangeSelectBranch } from './branchOffice.actions';
import { BranchOfficeService } from '../../services';
import { tap } from 'rxjs/operators';


export class BranchOfficeStateModel {
    branchOffices: BranchOffice[];
    selectBranch?: BranchOffice;
}

@State<BranchOfficeStateModel>({
    name: 'branchOffice',
    defaults: {
        branchOffices: [],
    }

})
export class BranchOfficeState {

    constructor(
        private branchOfficeService: BranchOfficeService
    ) { }

    @Selector()
    static getBranchOffices(state: BranchOfficeStateModel) {
        return state.branchOffices;
    }

    @Selector()
    static getSelectedBranchOffice(state: BranchOfficeStateModel) {
        return state.selectBranch;
    }


    @Action(FetchBranchOffice)
    fetch({ patchState }: StateContext<BranchOfficeStateModel>) {
        return this.branchOfficeService.getAllBranchOffices().pipe(
            tap((resp) => {
                console.log('resp', resp);
                patchState({
                    branchOffices: [...resp.data]
                });
            })
        );
    }
    @Action(ChangeSelectBranch)
    fetchSelectCurrency({ patchState }: StateContext<BranchOfficeStateModel>, { payload }: ChangeSelectBranch) {
        patchState({
            selectBranch: payload
        });
    }


}