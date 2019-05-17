import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared/animations/shared-animations';
import { Store, Select, Selector } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '@retail/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product, SimpleProductDto } from '@retail/shared/models/products.models';
import { TagService } from '@retail/shared/services/tag.service';
import { TagState } from '@retail/shared/state/tag/tag.state';
import { Tag } from '@retail/shared/models/tag.model';
import { FetchTag, AddTagxProduct, DeleteTagxProduct } from '@retail/shared/state/tag/tag.actions';
import { Omit } from '@retail/shared/utils';
import { echartStyles } from '@retail/shared/echart-styles';
import { EChartOption } from 'echarts';

interface TagExtends extends Tag {
    display: string;
    value: string;
}

class ToastConfig {
    message: string;
    title: string;
    options: {
        timeOut: number,
        closeButton: boolean,
        progressBar: boolean
    };

    constructor() {
        const options = {
            timeOut: 3000,
            closeButton: true,
            progressBar: true
        };
        this.options = options;
    }
}

@Component({
    selector: 'app-detailProduct',
    templateUrl: './detailProduct.component.html',
    styleUrls: ['./detailProduct.component.scss'],
    animations: [SharedAnimations]
})

export class DetailProductComponent implements OnInit {
    page = 1;
    pageSize = 5;

    product: Product;
    product$: Observable<Product>;
    productxTag: SimpleProductDto[] = [];
    productxCategory: SimpleProductDto[] = [];

    @Select(TagState.getTags)
    tags$: Observable<TagExtends[]>;
    tag: Tag;
    tagsxProduct: TagExtends[];
    tagsCtrl: FormControl = new FormControl(this.tagsxProduct);

    ///front
    chartPie1: any;
    salesChartBar: EChartOption;

    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store,
        private modalService: NgbModal,
        private toast: ToastrService,
        public productService: ProductService,
        public tagService: TagService,
    ) {
        console.log('[Detail-Product] Construct::');
    }

    ngOnInit() {
        console.log('[Detail-Product] init::');
        this.configFront();

        // this.store.dispatch(new FetchProducts()).subscribe();
        this.store.dispatch(new FetchTag()).subscribe();

        this.activatedRoute.params.subscribe(params => {
            ///get product
            this.productService.getProductByCod(params['codProduct']).subscribe(product => {
                this.product$ = of(product.data);
                this.product = product.data;
                console.log(this.product);
            });

            ///get all tags for product
            this.productService.getTagsByProductCod(params['codProduct']).subscribe(tags => {
                const listTags: TagExtends[] = [];
                tags.data.map(data => {
                    const item: TagExtends = {
                        ...data,
                        display: data.name,
                        value: data.name
                    };
                    listTags.push(item);
                });
                this.tagsxProduct = listTags;
                this.tagsCtrl.setValue(this.tagsxProduct);
            });

        });
    }

    getTagsxProduct(code: string) {
        this.productService.getTagsByProductCod(code).subscribe(tags => {
            const listTags: TagExtends[] = [];
            tags.data.map(data => {
                const item: TagExtends = {
                    ...data,
                    display: data.name,
                    value: data.name
                };
                listTags.push(item);
            });
            this.tagsxProduct = listTags;
            this.tagsCtrl.setValue(JSON.parse(JSON.stringify(this.tagsxProduct)));
        });
    }

    closeCardProductxTag() {
        this.tag = null;
        this.productxTag = [];
        this.tagsCtrl.setValue(JSON.parse(JSON.stringify(this.tagsxProduct)));

    }

    onSelectTag(item: TagExtends) {
        console.log('event: ', item);

        this.tag = item;
        this.tagService.getProductsForTag(item.id).subscribe(products => {
            this.productxTag = products.data.filter(data => {
                return data.c_Codigo !== this.product.c_Codigo;
            });

            if (this.productxTag.length === 0) {
                const configToast = new ToastConfig();
                configToast.message = 'No existen productos asociados a la etiqueta';
                configToast.title = this.tag.name;

                this.toast.warning(configToast.message, configToast.title, configToast.options);
            }
        });
    }

    onAddingTag(item: TagExtends) {
        console.log('tag adding: ', item);
        const tag: Omit<Tag, 'id'> = {
            name: item.display
        };

        const configToast = new ToastConfig();
        configToast.title = tag.name;
        configToast.message = 'Etiqueta agregada exitosamente';
        this.store.dispatch(new AddTagxProduct(tag, this.product.c_Codigo)).subscribe(
            (rsp) => {
                this.getTagsxProduct(this.product.c_Codigo);
                this.toast.success(configToast.message, configToast.title, configToast.options);
            },
            error => {
                console.log(error);
            }
        );

    }

    onRemoveTag(item) {
        console.log('tag remove: ', item);

        const configToast = new ToastConfig();
        configToast.message = 'Etiqueta eliminada exitosamente';
        configToast.title = item.name;
        this.store.dispatch(new DeleteTagxProduct({ tagId: item.id, productId: this.product.id })).subscribe(
            () => {
                this.toast.success(configToast.message, configToast.title, configToast.options);
            },
            error => {
                console.log(error);
            }
        );
    }


    private configFront() {
        this.chartPie1 = {
            ...echartStyles.defaultOptions, ...{
                legend: {
                    show: true,
                    bottom: 0,
                },
                series: [{
                    type: 'pie',
                    ...echartStyles.pieRing,

                    label: echartStyles.pieLabelCenterHover,
                    data: [{
                        name: 'Completed',
                        value: 80,
                        itemStyle: {
                            color: '#663399',
                        }
                    }, {
                        name: 'Pending',
                        value: 20,
                        itemStyle: {
                            color: '#ced4da',
                        }
                    }]
                }]
            }
        };

        this.salesChartBar = {
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                x: 'right',
                data: ['Online', 'Offline']
            },
            grid: {
                left: '8px',
                right: '8px',
                bottom: '0',
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '${value}'
                },
                min: 0,
                max: 100000,
                interval: 25000,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    interval: 'auto'
                }
            }

            ],

            series: [{
                name: 'Online',
                data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                label: { show: false, color: '#0168c1' },
                type: 'bar',
                barGap: 0,
                color: '#bcbbdd',
                smooth: true,

            },
            {
                name: 'Offline',
                data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                label: { show: false, color: '#639' },
                type: 'bar',
                color: '#7569b3',
                smooth: true
            }

            ]
        };

    }



}
