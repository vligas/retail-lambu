import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-layout',
  templateUrl: './maintenance-layout.component.html',
  styleUrls: ['./maintenance-layout.component.scss']
})
export class MaintenanceLayoutComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';

  constructor() { }

  ngOnInit() {
  }

}
