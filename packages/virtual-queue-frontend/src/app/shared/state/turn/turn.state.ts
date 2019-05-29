import { Turn } from '../../models/turn.model';
import { State, Store, Selector, Action, StateContext } from '@ngxs/store';
import { FetchTurns, AddTurns } from './turn.action';

export interface TurnStateModel {
    turns: Turn[];
}

@State<TurnStateModel>({
    name: 'turns',
    defaults: {
        turns: []
    }
})
export class TurnState {
    constructor(private store: Store) { }

    @Selector()
    static getTurns(state: TurnStateModel) {
        return state.turns;
    }

    @Action(FetchTurns)
    fetch({ patchState }: StateContext<TurnStateModel>) {
        patchState({
            turns: [{
                id: 1,
                name: 'Carniceria',
                actualTurn: 1,
                limitTurn: 100
            }, {
                id: 2,
                name: 'Pescaderia',
                actualTurn: 3,
                limitTurn: 100
            }]
        });
    }

    @Action(AddTurns)
    addTurns({ patchState }: StateContext<TurnStateModel>, action: AddTurns) {
        patchState({
            turns: [...action.payload]
        });
    }
}