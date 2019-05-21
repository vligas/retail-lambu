import { Component, OnInit } from '@angular/core';
import {
    SharedAnimations,
    RequestUpdateRoleDto,
    RequestCreateRolePermissionDto,
    RequestCreateRoleDto,
    Role,
    Permits
} from '@retail/shared';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateRole, CreateRole } from '@retail/shared/state/roleControl/role.actions';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '@retail/shared/services/auth.service';
import { OptionToast, Utils } from '@retail/shared/utils';
import { debounceTime } from 'rxjs/operators';

interface PermitsExt extends Permits {
    isSelected: boolean
}

@Component({
    selector: 'app-detailRole',
    templateUrl: './detailRole.component.html',
    styleUrls: ['./detailRole.component.scss'],
    animations: [SharedAnimations]
})
export class DetailRoleComponent implements OnInit {
    searchControl: FormControl = new FormControl();
    formBasic: FormGroup;
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 15;
    loading: boolean;

    role: Role;
    permits: PermitsExt[];
    filteredPermits: PermitsExt[];
    onEdited: boolean = false;

    constructor(
        private router: Router,
        private store: Store,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private toast: ToastrService,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService
    ) { }

    ngOnInit() {
        console.log('[Detail-Role]: init.');

        this.formBasic = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });

        this.activatedRoute.params.subscribe(params => {
            let id = params['idRole'];

            let role = this.authService.getRole(id).toPromise()
            let permits = this.authService.getPermissions().toPromise()
            let vPromise: Promise<any>[] = [role, permits];

            Promise.all(vPromise)
                .then(data => {
                    this.role = data[0].data;
                    if (id && this.role) {
                        this.permits = data[1].data.map(data => {
                            let finder = this.role.permissions.find(item => { return item.id === data.id });
                            data.isSelected = (finder) ? true : false;
                            return data
                        })
                        this.filteredPermits = [...this.permits];
                    }
                    else {
                        this.role = {
                            name: '',
                            description: '',
                            permissions: [],
                            id: null
                        }
                        this.permits = data[1].data;
                        this.filteredPermits = [...this.permits];
                        this.onEdited = true;
                    }
                })
                .catch(err => { console.error(err); });
        })

        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.filterData(value);
            });
    }

    filterData(val) {
        if (!val) {
            return this.filteredPermits = [...this.permits];
        }
        else {
            val = val.toLowerCase();
            const rows = this.permits.filter(function (d) {
                return (d.name.toString().toLowerCase().indexOf(val) > -1);
            });
            this.filteredPermits = rows;
        }
    }

    cancelEdit() {
        this.formBasic.setValue({
            name: this.role.name,
            description: this.role.description
        });

    }
    saveName(event) {
        console.log(event);

        let value = this.formBasic.value;
        if (value.name !== '' && value.description !== '') {
            this.role.name = value.name;
            this.role.description = value.description;

            this.onEdited = false;
        }
        else {
            this.toast.error('Algunos datos no han podido ser validados', 'Error!', { progressBar: true });
        }

    }

    /**
     * Show teh popup form to add tag
     * @param content 
     */
    openModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((role: Role) => {
                this.setRole(role);
            }, (reason) => {
                console.log('Err!', reason);
            });
    }

    setRole(role: Role) {
        let newPermits: RequestCreateRolePermissionDto[] = [];
        this.permits.forEach(item => { if (item.isSelected) newPermits.push({ id: item.id }); })

        let newRole: RequestUpdateRoleDto = { name: this.role.name, description: this.role.description, permissions: [...newPermits] }

        if (this.validateRole(role, newPermits)) {
            if (this.role.id) {//si es el rol ya existe
                this.updateRole(newRole, this.role.id);
            }
            else {
                this.createRole(newRole);
            }
        }
        else {
            let opt: OptionToast = {
                closeButton: true,
                progressBar: true,
                timeOut: 5000
            }
            this.toast.warning('No se puede crear o actualizar el rol sin definir nombre, descripción y permisos asignados', 'Alerta!', opt);
        }
    }

    validateRole(role: Role, permits: RequestCreateRolePermissionDto[]) {
        return !(Utils.isNullOrBlank(role.name) || Utils.isNullOrBlank(role.description) || !permits.length);
    }

    updateRole(role: RequestUpdateRoleDto, id: number) {
        this.store.dispatch(new UpdateRole({ register: role, id: id })).subscribe(sucess => {
            let opt: OptionToast = {
                closeButton: true,
                progressBar: true,
                timeOut: 3000
            }
            this.toast.success('El rol ha sido actualizado exitosamente', role.name, opt);
        });
    }

    createRole(role: RequestCreateRoleDto) {
        this.store.dispatch(new CreateRole(role)).subscribe(sucess => {
            let opt: OptionToast = {
                closeButton: true,
                progressBar: true,
                timeOut: 3000
            }
            this.toast.success('El rol ha sido creado exitosamente', role.name, opt);
            this.router.navigate(['authManagement/role-control']);

        });
    }

    isEdit() {
        this.formBasic.setValue({
            name: this.role.name,
            description: this.role.description
        })
        this.onEdited = true;
    }

}
