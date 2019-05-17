import { Component, OnInit } from '@angular/core';
import { echartStyles } from '@retail/shared/echart-styles';
import { DollarPrice } from '@retail/shared/models/dollarPrice.model';
import { Store, Select } from '@ngxs/store';
import { AddDollarPrice, FetchDollarPrice, DeleteDollarPrice } from '@retail/shared/state/dollarPrice/dollarPrice.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DollarPriceState } from '@retail/shared/state/dollarPrice/dollarPrice.state';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dolar-price',
  templateUrl: './dolar-price.component.html',
  styleUrls: ['./dolar-price.component.scss']
})
export class DolarPriceComponent implements OnInit {

  chartLineOption3: any;
  dollarPriceForm: FormGroup;

  @Select(DollarPriceState.getDollarPrices) prices$: Observable<DollarPrice[]>;
  @Select(DollarPriceState.actualPrice) actualPrice$: Observable<DollarPrice>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.store.dispatch(new FetchDollarPrice()).subscribe();
    this.prices$.subscribe(prices => {

      this.chartLineOption3 = {
        ...echartStyles.lineNoAxis, ...{
          series: [{
            data: prices.slice(-7).map(price => price.price),
            lineStyle: {
              color: 'rgba(102, 51, 153, .86)',
              width: 3,
              shadowColor: 'rgba(0, 0, 0, .2)',
              shadowOffsetX: -1,
              shadowOffsetY: 8,
              shadowBlur: 10
            },
            label: { show: true, color: '#212121' },
            type: 'line',
            smooth: true,
            itemStyle: {
              borderColor: 'rgba(69, 86, 172, 0.86)'
            }
          }]
        }
      };
      this.chartLineOption3.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    });

    this.dollarPriceForm = this.fb.group({
      price: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  deletePrice(price: DollarPrice) {
    this.store.dispatch(new DeleteDollarPrice(price.id)).subscribe(
      () => {
        this.toast.success('Precio eliminado', 'Finalizado.')
      },
      error => {
        this.toast.error(error.message)
      }
    )
  }

  /**
   * Handled event of submit of button
   */
  setDollarPrice() {

    const date = new Date(this.dollarPriceForm.value.date).toISOString();
    this.store.dispatch(new AddDollarPrice({ ...this.dollarPriceForm.value, date })).subscribe(
      () => {
        this.toast.success('Precio del dolar añadido', 'Finalizado.')
      },
      error => {
        this.toast.error(error.message)
      }
    );

  }



}
