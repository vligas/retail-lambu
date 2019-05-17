import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataLayerService } from '@retail/shared/services/data-layer.service';
import { SharedAnimations } from '@retail/shared/animations/shared-animations';
import { CategoryState } from '../../../shared/state/category/category.state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Category } from '@retail/shared/models/category.model';
import { Observable } from 'rxjs';
import { FetchCategory, AddCategory, DeleteCategory, UpdateCategory } from '../../../shared/state/category/category.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [SharedAnimations]
})
export class CategoryComponent implements OnInit {
  @ViewChild('code') inputCode: HTMLInputElement;

  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  categories: Category[];
  categoryForm: FormGroup;
  title: string = 'Nueva categoría'

  @Select(CategoryState.getCategories) categories$: Observable<Category[]>;


  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.store.dispatch(new FetchCategory()).subscribe();

    this.categories$.subscribe(categories => {
      this.categories = categories;
    });

    this.categoryForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
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
  open(content, option: number, category?: Category) {

    if (option === 1) {
      this.categoryForm.setValue({ code: '', description: '' });
      this.title = 'Nueva categoría';
      this.categoryForm.get('code').enable();
    } else {
      this.title = 'Editar categoría';
      console.log(this.inputCode);
      this.categoryForm.get('code').disable();
      this.categoryForm.setValue({ code: category.code, description: category.description });
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result: Category) => {
        // tslint:disable-next-line:switch-default
        switch (option) {
          case 1:
            // add category
            this.addCategory(result);
            break;
          case 2:
            // edit category
            this.editCategory(category);
            break;
        }
      }, (reason) => {
        console.log('Err!', reason);
      });
  }

  /**
   * Delete category
   */
  deleteCategory(category: Category) {
    this.store.dispatch(new DeleteCategory(category.id)).subscribe(
      () => {
        this.toast.success('Categoria eliminada', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

  /**
   * Add the category to state 
   * @param category 
   */
  addCategory(category: Category) {
    this.store.dispatch(new AddCategory({ ...this.categoryForm.value })).subscribe(
      () => {
        this.toast.success('Categoría añadida', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }


  editCategory(category: Category) {
    this.store.dispatch(new UpdateCategory({ id: category.id, ...this.categoryForm.value })).subscribe(
      () => {
        this.toast.success('Categoria actualizada', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }
}
