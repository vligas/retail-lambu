import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarPriceComponent } from './dolar-price.component';

describe('DolarPriceComponent', () => {
  let component: DolarPriceComponent;
  let fixture: ComponentFixture<DolarPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolarPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
