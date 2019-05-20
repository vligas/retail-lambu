import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { ResponseSimpleUserDto } from '../../src/dto';
import { FetchUsers, UpdateUser } from './user.actions';
import { UserService } from '../../services/user.service';


export interface UserStateModel {
    users: ResponseSimpleUserDto[];
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        users: []
    }
})

export class UserState {
    constructor(
        private store: Store,
        private userService: UserService
    ) { }

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }

    @Action(FetchUsers)
    FetchUsers(stateContext: StateContext<UserStateModel>, actions: FetchUsers) {
        return this.userService.getAllUsers().pipe(
            tap(resp => {
                stateContext.patchState({ users: [...resp.data] });
            }, err => { console.log(err); })
        );
    }

    @Action(UpdateUser)
    UpdateUser(stateContext: StateContext<UserStateModel>, actions: UpdateUser) {
        let state = stateContext.getState();
        return this.userService.updateUser(actions.payload.register, actions.payload.id).pipe(
            tap(resp => {
                let mapper = state.users.map(item => {
                    let p = item;
                    if (item.id === resp.data.id) {
                        p = resp.data;
                    }
                    return p;
                });
                stateContext.patchState({ users: [...mapper] });
            }, err => { console.log(err); })
        );
    }

}


