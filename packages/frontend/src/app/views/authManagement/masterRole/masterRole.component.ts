import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Store, Select } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RoleState } from '@frontend/app/shared/state/roleControl/role.state';
import { Observable } from 'rxjs';
import { Role } from '@frontend/app/shared/models/auth.model';
import { FetchRoles, UpdateRole, DeleteRole } from '@frontend/app/shared/state/roleControl/role.actions';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '@frontend/app/shared/services/auth.service';
import { OptionToast } from '@frontend/app/shared/utils';

interface RoleExt extends Role{
    isSelected: boolean
}

@Component({
  selector: 'app-masterRole',
  templateUrl: './masterRole.component.html',
  styleUrls: ['./masterRole.component.scss'],
  animations: [SharedAnimations]
})
export class MasterRoleComponent implements OnInit {
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 15;

    roleForm: FormGroup;

    @Select(RoleState.getRoles)
    roles$: Observable<RoleExt[]>;
    roles: RoleExt[];

    listPermits: any[]= [];


    constructor(
        private router: Router,
        private store: Store,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private toast: ToastrService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        console.log('[Master-Role]: init.');

        this.store.dispatch(new FetchRoles()).subscribe();
        this.roles$.subscribe( data =>{
            this.roles= data;
            console.log(this.roles);
            
        })

        this.roleForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            id: [0, Validators.required]
        });
    }

    selectAll(e) {
        this.roles = this.roles.map(p => {
            p.isSelected = this.allSelected;
            return p;
        });
        if (this.allSelected) {

        }
    }


    navToDetail(obj: RoleExt){
        this.router.navigate(['authManagement/detail-role', obj.id]);
    }

    navToCreate(){
        this.router.navigate(['authManagement/detail-role', 0]);
    }


    /**
     * Show teh popup form to add tag
     * @param content 
     */
    openModal(content, option: string, role?: RoleExt) {

        switch (option.toLowerCase()){
            case 'create':
                this.roleForm.setValue({ name: '', description: '', id: 0 });
                break;
            case 'set':
                this.roleForm.setValue({ name: role.name, description: role.description, id: role.id });
                break;
            case 'delete':
                this.roleForm.setValue({ name: role.name, description: role.description, id: role.id });
                break;
            case 'permits':
                this.listPermits= role.permissions;
                break;
        }

        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then((role: RoleExt) => {
            switch (option) {
                case 'create':
                    // this.addTag(tag);
                    break;
                case 'set':
                    this.setRole(role);
                    break;
                case 'delete':
                    this.deleteRole(role);
                    break;
            }
        }, (reason) => {
            console.log('Err!', reason);
        });
    }


    setRole(role: RoleExt){
        console.log('set role:: ', role);

        this.store.dispatch(new UpdateRole({id: role.id, register: role})).subscribe( success =>{
            let opt: OptionToast= {
                closeButton: true,
                progressBar: true,
                timeOut: 3000
            }
            this.toast.success('Rol actualizado exitosamente' , role.name, opt);
        });
    }

    deleteRole(role: RoleExt){
        console.log('delete role:: ', role);

        this.store.dispatch(new DeleteRole(role.id)).subscribe( success =>{
            let opt: OptionToast= {
                closeButton: true,
                progressBar: true,
                timeOut: 3000
            }
            this.toast.success('Rol eliminado exitosamente' , role.name, opt);
        });
    }
    
}
