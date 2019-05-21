import { Component, OnInit } from '@angular/core';
import { CurrencyHistoric, Price } from '@retail/shared';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  SharedAnimations,
  CurrencyState,
  FetchCurrencyHistoric,
  DeletePrice,
  AddPrice
} from '@retail/shared';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { echartStyles } from '@retail/shared/echart-styles';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss'],
  animations: [SharedAnimations]

})
export class HistoricComponent implements OnInit {

  chartLineOption3: any;
  currencyId: number;
  priceForm: FormGroup;

  @Select(CurrencyState.getCurrencyHistoric) currencyHistoric$: Observable<CurrencyHistoric>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currencyId = params['id'];
    });

    this.store.dispatch(new FetchCurrencyHistoric(this.currencyId)).subscribe();

    this.currencyHistoric$.subscribe(historic => {

      this.chartLineOption3 = {
        ...echartStyles.lineNoAxis, ...{
          series: [{
            data: historic.values.slice(-7).map(price => price.price),
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

    this.priceForm = this.fb.group({
      price: ['', Validators.required],
      date: ['', Validators.required]
    });

  }


  deletePrice(price: Price) {
    this.store.dispatch(new DeletePrice(this.currencyId, price.id)).subscribe(
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
  setPrice() {

    const date = new Date(this.priceForm.value.date).toISOString();
    const currencyId = this.currencyId;
    this.store.dispatch(new AddPrice({ ...this.priceForm.value, date, currencyId })).subscribe(
      () => {
        this.toast.success(`Precio añadido`, 'Finalizado.')
      },
      error => {
        this.toast.error(error.message)
      }
    );

  }

}
