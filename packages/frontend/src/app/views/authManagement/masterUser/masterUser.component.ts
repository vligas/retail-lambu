import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Store, Select } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OptionToast } from '@frontend/app/shared/utils';
import { UserState } from '@frontend/app/shared/state/userControl/user.state';
import { ResponseSimpleUserDto } from '@frontend/app/shared/dto/user.dto';
import { FetchUsers } from '@frontend/app/shared/state/userControl/user.actions';

interface UserExt extends ResponseSimpleUserDto{
    isSelected: boolean
}

@Component({
  selector: 'app-masterUser',
  templateUrl: './masterUser.component.html',
  styleUrls: ['./masterUser.component.scss'],
  animations: [SharedAnimations]
})
export class MasterUserComponent implements OnInit {
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 15;

    userForm: FormGroup;

    @Select(UserState.getUsers)
    users$: Observable<UserExt[]>;
    users: UserExt[];

    listRoles: any[]= [];


    constructor(
        private router: Router,
        private store: Store,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private toast: ToastrService,
    ) { }

    ngOnInit() {
        console.log('[Master-User]: init.');

        this.store.dispatch(new FetchUsers()).subscribe();
        this.users$.subscribe( data =>{
            this.users= data;
            console.log(this.users);
        })

        this.userForm = this.fb.group({
            login: ['', Validators.required],
            description: ['', Validators.required],
            id: [0, Validators.required]
        });
    }

    selectAll(e) {
        this.users = this.users.map(p => {
            p.isSelected = this.allSelected;
            return p;
        });
        if (this.allSelected) {

        }
    }


    navToDetail(obj: UserExt){
        this.router.navigate(['authManagement/detail-user', obj.id]);
    }


    /**
     * Show teh popup form to add tag
     * @param content 
     */
    openModal(content, option: string, user?: UserExt) {

        switch (option.toLowerCase()){
            case 'create':
                this.userForm.setValue({ name: '', description: '', id: 0 });
                break;
            case 'set':
                this.userForm.setValue({ name: user.login_name, description: user.descripcion, id: user.id });
                break;
            case 'delete':
                this.userForm.setValue({ name: user.login_name, description: user.descripcion, id: user.id });
                break;
            case 'roles':
                this.listRoles = user.roles;
                console.log(this.listRoles);
                
                break;
        }

        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then((user: UserExt) => {
            switch (option) {
                case 'create':
                    // this.addTag(tag);
                    break;
                case 'set':
                    this.setRole(user);
                    break;
                case 'delete':
                    // this.deleteTag(tag);
                    break;
            }
        }, (reason) => {
            console.log('Err!', reason);
        });
    }


    setRole(user: UserExt){
        console.log('set user:: ', user);

        /* this.store.dispatch(new UpdateRole({id: role.id, register: role})).subscribe( success =>{
            let opt: OptionToast= {
                closeButton: true,
                progressBar: true,
                timeOut: 3000
            }
            this.toast.success('Rol actualizado exitosamente' , role.name, opt);
        }); */
    }
    
}
