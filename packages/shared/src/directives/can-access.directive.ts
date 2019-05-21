import {
    Input,
    Directive,
    TemplateRef,
    ViewContainerRef,
    OnInit,
    OnDestroy
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SessionState } from '../state';
import {
    Select,
    Store
} from '@ngxs/store';

@Directive({
    selector: '[canAccess]'
})
export class CanAccessDirective implements OnInit, OnDestroy {

    @Input('canAccess') permissions: string[];
    private permission$: Subscription;

    @Select(SessionState.getUser)
    private user$: Observable<any>;

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private store: Store) {
    }

    ngOnInit(): void {
        if (typeof this.permissions === 'string') {
            this.permissions = [this.permissions];
        }
        this.applyPermission();
    }
    ngOnDestroy(): void {
        this.permission$.unsubscribe();
    }

    private applyPermission(): void {
        this.permission$ = this.user$.subscribe((user) => {
            console.log(user);
            console.log(this.permissions);
            if (this.permissions.every(p => user.permissions.find(up => up.name === p))) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
}
