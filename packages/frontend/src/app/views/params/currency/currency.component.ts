import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import {
  SharedAnimations,
  Currency,
  CurrencyState,
  AddCurrency,
  FetchCurrency,
  DeleteCurrency,
  UpdateCurrency
} from '@retail/shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  animations: [SharedAnimations]
})
export class CurrencyComponent implements OnInit {

  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  tittleModal = 'Nueva Moneda';
  currencies: Currency[];
  currencyForm: FormGroup;
  filterForm: FormGroup;
  @Select(CurrencyState.getCurrencies) currencies$: Observable<Currency[]>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.store.dispatch(new FetchCurrency()).subscribe();

    this.currencies$.subscribe(currencies => {
      this.currencies = currencies;
    });

    this.currencyForm = this.fb.group({
      name: ['', Validators.required],
      denomination: ['', Validators.required]
    });

    this.filterForm = this.fb.group({
      search: [''],
      denomination: ['']
    });
  }

  selectAll(e) {

    if (this.allSelected) {

    }
    console.log(this.allSelected);
  }

  /**
 * Show teh popup form to add category
 * @param content 
 */
  open(content, option: number, currency?: Currency) {
    console.log('Contenido del modal', content);
    if (option === 1) {
      this.tittleModal = 'Nueva Moneda';
      this.currencyForm.setValue({ name: '', denomination: '' });
    } else {
      this.tittleModal = 'Editar Moneda';
      this.currencyForm.setValue({ name: currency.name, denomination: currency.denomination });
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result: Currency) => {
        // tslint:disable-next-line:switch-default
        switch (option) {
          case 1:
            // add category
            this.addCurrency(result);
            break;
          case 2:
            // edit category
            this.editCurrency(currency);
            break;
        }
      }, (reason) => {
        console.log('Err!', reason);
      });
  }


  /**
   * Delete currency
   */
  deleteCurrency(currency: Currency) {
    this.store.dispatch(new DeleteCurrency(currency.id)).subscribe(
      () => {
        this.toast.success('Moneda eliminada', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

  /**
   * Add the currency to state 
   * @param currency 
   */
  addCurrency(currency: Currency) {
    console.log(this.currencyForm.value);
    this.store.dispatch(new AddCurrency({ ...this.currencyForm.value })).subscribe(
      () => {
        this.toast.success('Moneda añadida', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }


  editCurrency(currency: Currency) {
    this.store.dispatch(new UpdateCurrency({ id: currency.id, ...this.currencyForm.value })).subscribe(
      () => {
        this.toast.success('Moneda actualizada', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

}
