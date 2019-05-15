import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDockComponent } from './aside-dock.component';

describe('AsideDockComponent', () => {
  let component: AsideDockComponent;
  let fixture: ComponentFixture<AsideDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
