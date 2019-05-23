import { Component, OnInit } from '@angular/core';
import {
  NavigationService,
  SearchService
} from '@retail/shared';

import {
  Router,
  RouteConfigLoadStart,
  ResolveStart,
  RouteConfigLoadEnd,
  ResolveEnd
} from '@angular/router';

@Component({
  selector: 'app-admin-layout-sidebar-compact',
  templateUrl: './admin-layout-sidebar-compact.component.html',
  styleUrls: ['./admin-layout-sidebar-compact.component.scss']
})
export class AdminLayoutSidebarCompactComponent implements OnInit {
  moduleLoading: boolean;

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

}