import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService, IMenuItem, IChildItem } from '../../services/navigation.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  subItem: IChildItem;
  itemParent: IMenuItem;
  constructor(private activatedRoute: ActivatedRoute,
    private navService: NavigationService) { }

  ngOnInit() {

    this.buildBreadCrumbsNames();

  }

  /**
   * Build breadcrumb names of the route 
   */
  buildBreadCrumbsNames() {

    let urlCurrent;
    let urlParent;

    // url
    this.activatedRoute.url.subscribe(urlPath => {
      urlCurrent = urlPath[urlPath.length - 1].path;
    });

    // get parent of url 
    this.activatedRoute.parent.url.subscribe(urlPath => {
      urlParent = urlPath[urlPath.length - 1].path;
    });

    // filter de items by urlCurrent
    this.navService.menuItems$.subscribe(items => {
      const menuItems = items.filter(item => {
        return item.sub.find(subItem => {
          if (subItem.state === `/${urlParent}/${urlCurrent}`) {
            this.subItem = subItem;
            return true;
          }
          return false;
        });
      });

      this.itemParent = menuItems[0];
    });
  }
}
