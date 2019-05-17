import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '@retail/shared/models/user.model';
import { Login, Logout } from './session.actions';
import { AuthService } from '../../services/auth.service';
import { LocalStoreService } from '@retail/shared/services/local-store.service';
import { tap } from 'rxjs/operators';

export class SessionStateModel {
    user: User;
    token: string;
}

@State<SessionStateModel>({
    name: 'session',
    defaults: {
        user: null,
        token: null
    }
})
export class SessionState {

    constructor(private authService: AuthService, private local: LocalStoreService) {
    }

    @Selector()
    static isLoggedIn(state: SessionStateModel) {
        return !!state.token;
    }

    @Selector()
    static getUser(state: SessionStateModel, authService: AuthService) {
        return state.user;
    }

    @Action(Login)
    login({ getState, patchState }: StateContext<SessionStateModel>, { payload }: Login) {
        return this.authService.signin(payload).pipe(tap(
            (resp) => {
                this.local.setItem('session', resp.data);
                patchState({
                    ...resp.data
                });
            }
        ));
    }

    @Action(Logout)
    logout({ patchState }: StateContext<SessionStateModel>) {
        patchState({
            user: null,
            token: null
        });
        return this.authService.signout();
    }
}
