import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceVariationComponent } from './product-price-variation.component';

describe('ProductPriceVariationComponent', () => {
  let component: ProductPriceVariationComponent;
  let fixture: ComponentFixture<ProductPriceVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
