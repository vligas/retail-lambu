import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { FetchRoles, UpdateRole, CreateRole, DeleteRole } from './role.actions';
import { AuthService } from '../../services/auth.service';
import { ResponseRoleDto } from '../../dto/auth.dto';


export interface RoleStateModel {
    roles: ResponseRoleDto[];
}

@State<RoleStateModel>({
    name: 'role',
    defaults: {
        roles: []
    }
})

export class RoleState {
    constructor(
        private store: Store,
        private authService: AuthService
    ) { }

    @Selector()
    static getRoles(state: RoleStateModel) {
        return state.roles;
    }

    @Action(FetchRoles)
    FetchRoles(stateContext: StateContext<RoleStateModel>, actions: FetchRoles) {
        return this.authService.getAllRoles().pipe(
            tap(resp => {
                stateContext.patchState({ roles: [...resp.data] });
            }, err => { console.log(err); })
        );
    }

    @Action(UpdateRole)
    UpdateRole(stateContext: StateContext<RoleStateModel>, actions: UpdateRole) {
        const state: RoleStateModel = stateContext.getState();
        return this.authService.updateRole(actions.payload.id, actions.payload.register).pipe(
            tap(resp => {
                stateContext.patchState({ roles: [...resp.data] });
            }, err => {
                console.error(err);
            })
        );
    }


    @Action(CreateRole)
    CreateRole(stateContext: StateContext<RoleStateModel>, actions: CreateRole) {
        let oldRole = stateContext.getState().roles;
        return this.authService.createRole(actions.payload).pipe(
            tap(resp => {
                stateContext.patchState({ roles: [...oldRole, resp.data] });
            }, err => { console.log(err); })
        );
    }

    @Action(DeleteRole)
    DeleteRole(stateContext: StateContext<RoleStateModel>, { payload }: DeleteRole) {
        return this.authService.deleteRole(payload).pipe(
            tap(resp => {
                const state = stateContext.getState();
                stateContext.patchState({
                    roles: state.roles.filter(role => role.id !== payload)
                });
            })
        );
    }

}


