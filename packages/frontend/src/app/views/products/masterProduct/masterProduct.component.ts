import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SimpleProductDto } from '@retail/shared/models/products.models';
import { ProductState } from '@retail/shared/state/product/product.state';
import { FetchProducts } from '@retail/shared/state/product/product.actions';
import { ResponseProvidersByProductDto } from '@retail/shared/dto/product.dto';
import { ProductService } from '@retail/shared/services/product.service';
import { Router } from '@angular/router';
import { FetchTag } from '@retail/shared/state/tag/tag.actions';
import { TagState } from '@retail/shared/state/tag/tag.state';
import { Tag } from '@retail/shared/models/tag.model';

@Component({
    selector: 'app-masterProduct',
    templateUrl: './masterProduct.component.html',
    styleUrls: ['./masterProduct.component.scss'],
    animations: [SharedAnimations]
})
export class MasterProductComponent implements OnInit {
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 15;

    products: SimpleProductDto[];
    productForm: FormGroup;

    listProviders: ResponseProvidersByProductDto[];

    // dollarPrice = 1;
    filterForm: FormGroup;

    @Select(ProductState.getProducts)
    products$: Observable<SimpleProductDto[]>;

    @Select(ProductState.getProductsCount)
    total$: Observable<number>;

    @Select(TagState.getTags)
    tags$: Observable<Tag>;

    constructor(
        private router: Router,
        private store: Store,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private toast: ToastrService,
        public productService: ProductService,
    ) {
        this.filterForm = this.fb.group({
            code: [''],
            tagId: ['']
        });

    }

    onFilterFormSubmit() {
        this.page = 1;
        const formValues = this.filterForm.getRawValue();
        this.store.dispatch(new FetchProducts({
            page: this.page,
            pageSize: this.pageSize,
            where: {
                c_Codigo: {
                    like: formValues.code
                },
                tagId: {
                    eq: formValues.tagId
                }
            }
        }));
    }

    ngOnInit() {
        this.store.dispatch(new FetchProducts({ page: this.page, pageSize: this.pageSize })).subscribe();
        this.store.dispatch(new FetchTag()).subscribe();

        this.products$.subscribe(products => {
            this.products = products;
        });

        this.productForm = this.fb.group({
            name: ['', Validators.required],
            id: [0, Validators.required]
        });
    }

    selectAll(e) {

        if (this.allSelected) {

        }
    }


    openModal(content, obj) {
        console.log(obj);
        this.productService.getProvidersByProducts(obj.c_Codigo).subscribe(providers => {

            this.listProviders = [...providers.data];
            console.log('providers:: ', this.listProviders);

            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
                .result.then((result) => {
                    console.log(result);
                }, (err) => {
                    console.log('Err!', err);
                });
        });
    }

    changePage(page: number) {
        this.page = page;
        this.store.dispatch(new FetchProducts({ page: this.page, pageSize: this.pageSize })).subscribe();
    }

    navToDetail(obj) {
        this.router.navigate(['products/detail-product', obj.c_Codigo]);
    }

}
