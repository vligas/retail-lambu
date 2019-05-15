import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { Login } from '@frontend/app/shared/state/session/session.actions';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private store: Store
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            username: ['lgonzalez', Validators.required],
            password: ['123', Validators.required]
        });
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Sigining in...';

        this.loading = true;
        this.loadingText = 'Conectando...';
        this.router.navigateByUrl('/params/competitor');

        this.store.dispatch(new Login(this.signinForm.value)).subscribe(
            () => {
                console.log('entro');
                this.router.navigateByUrl('/params/competitor');
                this.loading = false;
            },
            error => {
                console.log(error);
                this.loading = false;
            }
        );
    }

}
