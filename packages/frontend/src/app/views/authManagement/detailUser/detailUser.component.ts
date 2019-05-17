import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared/animations/shared-animations';
import { Store, Select } from '@ngxs/store';
import { ToastrService, Toast } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Role, Permits } from '@retail/shared/models/auth.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '@retail/shared/services/auth.service';
import { RequestUpdateRoleDto, RequestCreateRolePermissionDto } from '@retail/shared/dto/auth.dto';
import { OptionToast } from '@retail/shared/utils';
import { ResponseSimpleUserDto, RequestUpdateUserDto } from '@retail/shared/dto/user.dto';
import { UserService } from '@retail/shared/services/user.service';
import { RoleState } from '@retail/shared/state/roleControl/role.state';
import { Observable } from 'rxjs';
import { FetchRoles } from '@retail/shared/state/roleControl/role.actions';
import { UpdateUser } from '@retail/shared/state/userControl/user.actions';
import { debounceTime } from 'rxjs/operators';

interface RoleExt extends Role {
    isSelected: boolean
}

@Component({
    selector: 'app-detailUser',
    templateUrl: './detailUser.component.html',
    styleUrls: ['./detailUser.component.scss'],
    animations: [SharedAnimations]
})
export class DetailUserComponent implements OnInit {
    searchControl: FormControl = new FormControl();
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 15;
    loading: boolean;

    user: ResponseSimpleUserDto;

    @Select(RoleState.getRoles)
    roles$: Observable<RoleExt[]>;
    roles: RoleExt[];
    filteredRoles: RoleExt[];
    onEdited: boolean = false;

    constructor(
        private router: Router,
        private store: Store,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private toast: ToastrService,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private userService: UserService
    ) { }

    ngOnInit() {
        console.log('[Detail-Role]: init.');

        this.store.dispatch(new FetchRoles()).subscribe();

        this.activatedRoute.params.subscribe(async params => {
            let id = params['idUser'];

            let user = this.userService.getUserById(id).toPromise();
            let roles = this.authService.getAllRoles().toPromise();
            let vPromise: Promise<any>[] = [user, roles];

            Promise.all(vPromise)
                .then(data => {
                    this.user = data[0].data;
                    this.roles = data[1].data.map(data => {
                        let finder = this.user.roles.find(item => { return item.id === data.id; });
                        data.isSelected = (finder) ? true : false;
                        return data;
                    });
                    this.filteredRoles = [...this.roles];
                    console.table(this.filteredRoles)
                })
                .catch(err => { console.error(err) });
        });

        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.filterData(value);
            });
    }

    filterData(val) {
        if (!val) {
            return this.filteredRoles = [...this.roles];
        }
        else {
            val = val.toLowerCase();
            const rows = this.roles.filter(function (d) {
                return (d.name.toString().toLowerCase().indexOf(val) > -1);
            });
            this.filteredRoles = rows;
        }
    }

    navToDetail(obj: RoleExt) {
        this.router.navigate(['authManagement/detail-role', obj.id]);
    }


    /**
     * Show teh popup form to add tag
     * @param content 
     */
    openModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((user: ResponseSimpleUserDto) => {
                this.setUser(user);
            }, (reason) => {
                console.log('Err!', reason);
            });
    }

    setUser(user: ResponseSimpleUserDto) {
        let listRoles: { id: number }[] = [];
        this.filteredRoles.forEach(item => {
            if (item.isSelected)
                listRoles.push({ id: item.id });
        });
        let register: RequestUpdateUserDto = { roles: listRoles, permissions: [] };
        this.store.dispatch(new UpdateUser({ register: register, id: user.id })).subscribe(sucess => {
            let opt: OptionToast = {
                closeButton: true,
                progressBar: true,
                timeOut: 3000
            }
            this.toast.success('Usuario actualizado exitosamente', user.login_name, opt);
        });
    }


    onSelect(role: RoleExt) {
        console.log('role selected: ', role);
    }

}
