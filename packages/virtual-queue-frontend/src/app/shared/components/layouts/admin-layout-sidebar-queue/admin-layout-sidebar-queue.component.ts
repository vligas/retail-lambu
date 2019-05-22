
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-admin-layout-sidebar-queue',
  templateUrl: './admin-layout-sidebar-queue.component.html',
  styleUrls: ['./admin-layout-sidebar-queue.component.scss']
})
export class AdminLayoutSidebarQueueComponent implements OnInit {
  moduleLoading: boolean;
  @ViewChild(PerfectScrollbarDirective) perfectScrollbar: PerfectScrollbarDirective;


  constructor(
    public searchService: SearchService,
    private router: Router,
    public navService: NavigationService,
  ) {

  }

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
