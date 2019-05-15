import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DebugHelper } from 'protractor/built/debugger';
import { SimpleProductDto } from '@frontend/app/shared/models/products.models';
import { TagState } from '@frontend/app/shared/state/tag/tag.state';
import { ProductState } from '@frontend/app/shared/state/product/product.state';
import { PriceVariationState } from '@frontend/app/shared/state/price-variation/price-variation.state';
import { Router } from '@angular/router';
import { Tag } from '@frontend/app/shared/models/tag.model';
import { FetchTag } from '@frontend/app/shared/state/tag/tag.actions';
import { FetchProductsForPriceVariation } from '@frontend/app/shared/state/price-variation/price-variation.actions';
import { RequestPriceVariationDto } from '@frontend/app/shared/dto/priceVariation.dto';



@Component({
  selector: 'app-product-price-variation',
  templateUrl: './product-price-variation.component.html',
  styleUrls: ['./product-price-variation.component.scss'],
  animations: [SharedAnimations]
})
export class ProductPriceVariationComponent implements OnInit {

  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 12;

  selectedTag: Tag;
  products: SimpleProductDto[];
  tags: Tag[];

  filterForm: FormGroup;
  @Select(TagState.getTags) tags$: Observable<Tag[]>;
  @Select(PriceVariationState.getProductsWithVariation) products$: Observable<SimpleProductDto[]>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toast: ToastrService) { }

  ngOnInit() {
    this.store.dispatch(new FetchTag()).subscribe();
    this.tags$.subscribe();
    this.products$.subscribe(products => {
      this.products = products.sort((a, b) => {
        return a.n_Precio1 > b.n_Precio1 ? -1 : 1;
      });
    });

    this.filterForm = this.fb.group({
      name: ['']
    });

  }

  showVariationByTag(tag: Tag) {
    console.log(tag);
    this.selectedTag = tag;
    const requestProduct: RequestPriceVariationDto = {
      tagId: tag.id,
      page: 1,
      pageSize: 2,
      query: ''
    }
    // obtenemos los productos por etiquetas 
    // activamos la la vista de la variacion
    this.store.dispatch(new FetchProductsForPriceVariation(requestProduct)).subscribe();

  }

  searchTags() {
    const formValues = this.filterForm.getRawValue();
    this.store.dispatch(new FetchTag(formValues)).subscribe();
  }

  cleanFilter() {
    this.filterForm.setValue({ name: '' });
  }

}
