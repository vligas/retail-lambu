import { Component, OnInit } from '@angular/core';
import gapOptions from '../../purchase/gap/gapersData';
import { FormBuilder } from '@angular/forms';
import * as _ from 'underscore';
import { Store, Select } from '@ngxs/store';
import {
  FetchConfig,
  UpdateConfig,
  ConfigState
} from '@retail/shared';
import { GapConfig } from '@retail/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) { }

  gapForm = this.fb.group({
    gapper1: [gapOptions.default.differenceField1],
    gapper2: [gapOptions.default.differenceField2]
  });

  priceOptions = gapOptions;

  @Select(ConfigState.gapConfig)
  gapConfiguration$: Observable<GapConfig>;

  gapCombinations = [];

  ngOnInit() {

    this.store.dispatch(new FetchConfig()).subscribe();

    this.gapConfiguration$.subscribe(conf => {
      if (conf) {
        this.gapCombinations = conf.json.value.defaultPrices.map(gappers => {
          return {
            gapper1: this.priceOptions.gapers.find(g => g.key === gappers.gapper1),
            gapper2: this.priceOptions.gapers.find(g => g.key === gappers.gapper2)
          };
        });
      }
    });
  }

  addGapCombination() {
    const { gapper1, gapper2 } = this.gapForm.value;
    const result: any = {};
    result.gapper1 = this.priceOptions.gapers.find(gap => gapper1 === gap.key);
    result.gapper2 = this.priceOptions.gapers.find(gap => gapper2 === gap.key);
    this.gapCombinations.push(result);
    console.log(this.gapCombinations);
  }

  deleteGapCombination(index: number) {
    this.gapCombinations.splice(index, 1);
  }

  saveGapConfig() {
    this.store.dispatch(new UpdateConfig({
      'default-fields-gap': {
        value: {
          defaultPrices: this.gapCombinations.map(c => ({
            gapper1: c.gapper1.key,
            gapper2: c.gapper2.key
          }))
        }
      }
    })).subscribe();
  }

}
