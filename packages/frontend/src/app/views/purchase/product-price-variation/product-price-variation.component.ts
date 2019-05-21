import { Component, OnInit } from '@angular/core';
import {
  SharedAnimations,
  RequestPriceVariationDto,
  SimpleProductDto,
  Tag,
  TagState,
  PriceVariationState,
  FetchTag,
  FetchProductsForPriceVariation
} from '@retail/shared';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';





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
