import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutSidebarQueueComponent } from './admin-layout-sidebar-queue.component';

describe('AdminLayoutSidebarQueueComponent', () => {
  let component: AdminLayoutSidebarQueueComponent;
  let fixture: ComponentFixture<AdminLayoutSidebarQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLayoutSidebarQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutSidebarQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
