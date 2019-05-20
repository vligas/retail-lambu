import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

import { FetchProductsForGap } from '@retail/shared/state/gap/gap.actions';
import { GapState } from '@retail/shared/state/gap/gap.state';
import { Store, Select } from '@ngxs/store';
import { DollarPriceState } from '@retail/shared/state/dollarPrice/dollarPrice.state';
import { FetchDollarPrice } from '@retail/shared/state/dollarPrice/dollarPrice.actions';
import { DollarPrice } from '@retail/shared/models/dollarPrice.model';
import { ResponseGapDto, Prices, RequestGapersDto, ResponseProvidersByProductDto } from '@retail/shared';
import gapersData from './gapersData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'underscore';
import { ProductService } from '@retail/shared/services/product.service';
import { Router } from '@angular/router';
import { ConfigState } from '@retail/shared/state/config/config.state';
import { Config } from '@retail/shared/models/config.model';
import { FetchConfig } from '@retail/shared/state/config/config.actions';


interface selectersGAP {
    name: string;
    key: string;
    sufijo: string;
    disabled: boolean;
}

@Component({
    selector: 'app-gap',
    templateUrl: './gap.component.html',
    styleUrls: ['./gap.component.scss'],
    animations: [SharedAnimations]
})

export class GapComponent implements OnInit {
    filterForm = new FormGroup({
        search: new FormControl(''),
        gap: new FormControl(''),
        gaperKey1: new FormControl(''),
        gaperKey2: new FormControl('')
    });

    allSelected: boolean;
    page = 1;
    pageSize = 20;

    products: ResponseGapDto[] = []; //ResponseGapDto[]
    dollarPrice = 1;

    listGapers1: selectersGAP[] = [];
    listGapers2: selectersGAP[] = [];
    gaper1: selectersGAP;
    gaper2: selectersGAP;

    listProviders: ResponseProvidersByProductDto[];

    @Select(GapState.getProductsWithCost)
    products$: Observable<ResponseGapDto[]>;

    @Select(GapState.getTotalOfProducts)
    total$: Observable<number>;

    @Select(GapState.getGappersProducts)
    gappers$: Observable<RequestGapersDto>;

    @Select(DollarPriceState.actualPrice)
    dolarToDay$: Observable<DollarPrice>;

    @Select(ConfigState.gapConfig)
    gapConfig$: Observable<Config>;


    constructor(
        private toastr: ToastrService,
        private store: Store,
        private modalService: NgbModal,
        private productService: ProductService,
        private router: Router,
    ) {
        this.listGapers1 = JSON.parse(JSON.stringify(gapersData.gapers));
        this.listGapers2 = JSON.parse(JSON.stringify(gapersData.gapers));
        this.filterForm.patchValue({
            gaperKey1: gapersData.default.differenceField1,
            gaperKey2: gapersData.default.differenceField2
        });

    }


    ngOnInit() {
        this.updateStateGapers();
        this.store.dispatch(new FetchConfig()).subscribe();
        this.store.dispatch(new FetchDollarPrice()).subscribe();

        this.products$.subscribe(products => {
            if (products) {
                this.products = [...products];
            }
        });

        this.gappers$.subscribe(gappers => {
            if (gappers) {
                this.filterForm.patchValue({
                    gaperKey1: (_.invert(Prices))[gappers.gapper1],
                    gaperKey2: (_.invert(Prices))[gappers.gapper2]
                });
                this.updateGapers();
            }
        });

        this.dolarToDay$.subscribe(dollarPrice => {
            if (dollarPrice) {
                this.dollarPrice = dollarPrice['price'];
            }
        });

        this.gapConfig$.subscribe(config => {
            if (config) {
                let gapers: any[] = config.json.value.defaultPrices.map(item => {
                    let p: RequestGapersDto = {
                        gapper1: Prices[item.gapper1],
                        gapper2: Prices[item.gapper2]
                    };
                    return p;
                })
                console.log('config:: ', gapers);
                // Arya mata al señor oscuro
                this.store.dispatch(new FetchProductsForGap(gapers, { pageSize: this.pageSize, page: this.page })).subscribe();
            }

        });
    }

    updateStateGapers() {
        for (let i = 0; i < this.listGapers1.length; i++) {
            this.listGapers1[i].disabled = (this.filterForm.get('gaperKey2').value === this.listGapers1[i].key) ? true : false;
            this.listGapers2[i].disabled = (this.filterForm.get('gaperKey1').value === this.listGapers2[i].key) ? true : false;
        }
    }

    getGaper(key: string) {
        const gaper = gapersData.gapers.find(item => {
            return item.key === key;
        });
        return gaper;
    }

    changePage(page: number) {
        this.page = page;
        this.searchProductsForGap();
    }

    updateGapers() {
        this.gaper1 = this.getGaper(this.filterForm.get('gaperKey1').value);
        this.gaper2 = this.getGaper(this.filterForm.get('gaperKey2').value);
    }

    selectAll(e) {
        /* this.products = this.products.map(p => {
            p.isSelected = this.allSelected;
            return p;
        }); */
        if (this.allSelected) {
            //aqui puedo hacer algo
        }
    }


    resetFilters() {
        this.filterForm.patchValue({
            search: '',
            gap: '',
            gaperKey1: gapersData.default.differenceField1,
            gaperKey2: gapersData.default.differenceField2
        });
        // this.gaperKey1 = (_.invert(Prices))[this.filters.differenceField1];
        // this.gaperKey2 = (_.invert(Prices))[this.filters.differenceField2];
    }


    changeGapers(oValue) {
        this.updateStateGapers();
        console.log('oValue:: ', oValue);
        console.log('gaper1:: ', Prices[this.filterForm.get('gaperKey1').value]);
        console.log('gaper2:: ', Prices[this.filterForm.get('gaperKey2').value]);
    }

    twing() {
        const aux = this.filterForm.get('gaperKey1').value;
        this.filterForm.get('gaperKey1').setValue(this.filterForm.get('gaperKey2').value);
        this.filterForm.get('gaperKey2').setValue(aux);
        this.updateStateGapers();
    }

    onFilterFormSubmit() {
        this.page = 1;
        console.log('entre')
        this.searchProductsForGap();
    }

    searchProductsForGap() {
        const formValues = this.filterForm.getRawValue();
        let listGapers: RequestGapersDto[] = [];
        listGapers.push({
            gapper1: Prices[formValues.gaperKey1 as string],
            gapper2: Prices[formValues.gaperKey2 as string]
        })
        this.store.dispatch(new FetchProductsForGap(
            listGapers,
            {
                query: {
                    productCode: formValues.search,
                    gap: formValues.gap
                },
                page: this.page,
                pageSize: this.pageSize
            }
        )).subscribe();
    }

    actionOne() {
        this.toastr.warning('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    }

    actionTwo(o) {
        console.log(o);
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    }

    openModal(content, obj) {
        console.log(obj);
        this.productService.getProvidersByProducts(obj.c_Codigo).subscribe(providers => {
            console.log('providers:: ', providers.data);

            this.listProviders = [...providers.data];

            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
                .result.then((result) => {
                    console.log(result);
                }, (err) => {
                    console.log('Err!', err);
                });
        });
    }

    navToDetail(obj) {
        this.router.navigate(['products/detail-product', obj.c_Codigo]);
    }


}
