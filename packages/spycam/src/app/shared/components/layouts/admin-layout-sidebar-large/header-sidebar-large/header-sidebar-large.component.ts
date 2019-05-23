import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  BranchOfficeService,
  FetchBranchOffice,
  BranchOffice,
  FetchCurrency,
  Currency,
  BranchOfficeState,
  CurrencyState,
  AuthService,
  SearchService,
  NavigationService
} from '@retail/shared';


@Component({
  selector: 'app-header-sidebar-large',
  templateUrl: './header-sidebar-large.component.html',
  styleUrls: ['./header-sidebar-large.component.scss']
})
export class HeaderSidebarLargeComponent implements OnInit {

  // tslint:disable-next-line:no-any
  notifications: any[];

  @Select(CurrencyState.getCurrencies)
  currencies: Observable<Currency[]>;

  @Select(BranchOfficeState.getBranchOffices)
  branch$: Observable<BranchOffice[]>;

  list: Currency[];
  listBranch: BranchOffice[];

  constructor(
    private navService: NavigationService,
    public searchService: SearchService,
    private auth: AuthService,
    private branchOffice: BranchOfficeService,
    private store: Store
  ) {
    this.notifications = [
      {
        icon: 'i-Speach-Bubble-6',
        title: 'New message',
        badge: '3',
        text: 'James: Hey! are you busy?',
        time: new Date(),
        status: 'primary',
        link: '/chat'
      },
      {
        icon: 'i-Receipt-3',
        title: 'New order received',
        badge: '$4036',
        text: '1 Headphone, 3 iPhone x',
        time: new Date('11/11/2018'),
        status: 'success',
        link: '/tables/full'
      },
      {
        icon: 'i-Empty-Box',
        title: 'Product out of stock',
        text: 'Headphone E67, R98, XL90, Q77',
        time: new Date('11/10/2018'),
        status: 'danger',
        link: '/tables/list'
      },
      {
        icon: 'i-Data-Power',
        title: 'Server up!',
        text: 'Server rebooted successfully',
        time: new Date('11/08/2018'),
        status: 'success',
        link: '/dashboard/v2'
      },
      {
        icon: 'i-Data-Block',
        title: 'Server down!',
        badge: 'Resolved',
        text: 'Region 1: Server crashed!',
        time: new Date('11/06/2018'),
        status: 'danger',
        link: '/dashboard/v3'
      }
    ];
  }

  ngOnInit() {
    this.store.dispatch(new FetchCurrency()).subscribe();
    this.currencies.subscribe(data => {
      this.list = data;
    });

    this.store.dispatch(new FetchBranchOffice()).subscribe();
    this.branch$.subscribe(data => {
      this.listBranch = data;
      console.log('Imprimiendo listBranch', this.listBranch);

    });
  }

  toggelSidebar() {
    const state = this.navService.sidebarState;
    if (state.childnavOpen && state.sidenavOpen) {
      return state.childnavOpen = false;
    }
    if (!state.childnavOpen && state.sidenavOpen) {
      return state.sidenavOpen = false;
    }
    if (!state.sidenavOpen && !state.childnavOpen) {
      state.sidenavOpen = true;
      setTimeout(() => {
        state.childnavOpen = true;
      }, 50);
    }
  }

  signout() {

    this.auth.signout();
  }

}
