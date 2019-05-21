import { Config } from '../../models';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { FetchConfig, UpdateConfig } from './config.actions';
import { AppConfigService } from '../../services';
import { tap } from 'rxjs/operators';


export class ConfigStateModel {
    config: Config[];
}

@State<ConfigStateModel>({
    name: 'config',
    defaults: {
        config: []
    }
})
export class ConfigState {

    constructor(
        private config: AppConfigService
    ) { }

    @Selector()
    static gapConfig(state: ConfigStateModel) {
        return state.config.find(c => c.name === 'default-fields-gap');
    }

    @Action(FetchConfig)
    fetch({ patchState }: StateContext<ConfigStateModel>) {
        return this.config.fetch().pipe(
            tap((resp) => {
                patchState({
                    config: [...resp.data]
                });
            })
        );
    }

    @Action(UpdateConfig)
    update({ patchState }: StateContext<ConfigStateModel>, { payload }: UpdateConfig) {
        return this.config.update(payload).pipe(tap(
            resp => {
                patchState({
                    config: [...resp.data]
                });
            }
        ));
    }
}