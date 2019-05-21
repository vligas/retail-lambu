import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '@retail/shared/services/navigation.service';
import { SearchService } from '@retail/shared/services/search.service';
import {
  Router,
  RouteConfigLoadStart,
  ResolveStart,
  RouteConfigLoadEnd,
  ResolveEnd
} from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-admin-layout-sidebar-large',
  templateUrl: './admin-layout-sidebar-large.component.html',
  styleUrls: ['./admin-layout-sidebar-large.component.scss']
})
export class AdminLayoutSidebarLargeComponent implements OnInit {

  moduleLoading: boolean;
  @ViewChild(PerfectScrollbarDirective) perfectScrollbar: PerfectScrollbarDirective;

  constructor(
    public navService: NavigationService,
    public searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.moduleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.moduleLoading = false;
      }
    });
  }
  onChangeMonedas(value) {
    console.log(value);
  }
}
