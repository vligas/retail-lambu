import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsModule } from './params.module';

describe('ParamsModule', () => {
  let component: ParamsModule;
  let fixture: ComponentFixture<ParamsModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
