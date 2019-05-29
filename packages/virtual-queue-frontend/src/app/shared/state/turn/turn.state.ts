import { Turn } from '../../models/turn.model';
import { State, Store, Selector, Action, StateContext } from '@ngxs/store';
import { FetchTurns, AddTurns } from './turn.action';
import { QueueService } from '../../services/http/queue.service';
import { tap } from 'rxjs/operators';

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
    constructor(private store: Store,
        private queue: QueueService) { }

    @Selector()
    static getTurns(state: TurnStateModel) {
        return state.turns;
    }

    @Action(FetchTurns)
    fetch({ patchState }: StateContext<TurnStateModel>) {
        return this.queue.getAll().pipe(
            tap(resp => {
                console.log(resp);
                patchState({
                    turns: [...resp]
                })
            })
        );
    }

    @Action(AddTurns)
    addTurns({ patchState }: StateContext<TurnStateModel>, action: AddTurns) {

        console.log(action);
        patchState({
            turns: [...action.data]
        });
    }
}