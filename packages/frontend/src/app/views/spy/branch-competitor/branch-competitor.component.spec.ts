import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCompetitorComponent } from './branch-competitor.component';

describe('BranchCompetitorComponent', () => {
  let component: BranchCompetitorComponent;
  let fixture: ComponentFixture<BranchCompetitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
