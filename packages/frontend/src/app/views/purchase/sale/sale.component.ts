import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  AsideDockComponent,
  ResponseSaleDto,
  SharedAnimations,
  SaleState,
  FetchSales
} from '@retail/shared';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
  animations: [SharedAnimations]
})
export class SaleComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';
  filterForm: FormGroup;
  pageSize = 15;
  page = 1;
  products: ResponseSaleDto[] = [];
  selectedItem;
  asideIndex: number;

  @Select(SaleState.getProductsWithSales)
  products$: Observable<ResponseSaleDto[]>;

  @Select(SaleState.getTotalOfProducts)
  total$: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private formater: NgbDateParserFormatter
  ) { }

  @ViewChild('asideDockList') asideList: AsideDockComponent;

  ngOnInit() {
    this.store.dispatch(new FetchSales({
      page: this.page,
      pageSize: this.pageSize,
    })).subscribe();

    this.products$.subscribe(products => {
      this.products = [...products];
    });

    this.filterForm = this.fb.group({
      code: [''],
      from: [''],
      to: ['']
    });
    console.log(this.asideList);


  }

  openAsideRight(item) {
    if (this.asideIndex !== 0) {
      this.asideList.openAside(0);
    }
    this.selectedItem = item;
  }

  changePage(page: number) {
    this.page = page;
    this.store.dispatch(new FetchSales({ page: this.page, pageSize: this.pageSize })).subscribe();
  }

  onFilterFormSubmit() {
    console.log('asas');
    this.page = 1;
    const formValues = this.filterForm.getRawValue();

    const from: NgbDateStruct = this.filterForm.get('from').value;
    const to: NgbDateStruct = this.filterForm.get('to').value;

    this.store.dispatch(new FetchSales({
      page: this.page,
      pageSize: this.pageSize,
      where: {
        c_Codigo: {
          like: formValues.code
        },
        f_fecha: {
          gt: this.formater.format(from),
          lt: this.formater.format(to)
        },
        c_CONCEPTO: {
          eq: 'VEN'
        }
      }
    }));
  }
}
