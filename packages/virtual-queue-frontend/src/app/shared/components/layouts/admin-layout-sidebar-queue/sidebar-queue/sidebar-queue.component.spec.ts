import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarQueueComponent } from './sidebar-queue.component';

describe('SidebarQueueComponent', () => {
  let component: SidebarQueueComponent;
  let fixture: ComponentFixture<SidebarQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
