import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Tag } from '@retail/shared/models/tag.model';
import { TagState } from '@retail/shared/state/tag/tag.state';
import { FetchTag, AddTag, UpdateTag, DeleteTag } from '@retail/shared/state/tag/tag.actions';
import { DebugHelper } from 'protractor/built/debugger';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
    animations: [SharedAnimations]
})
export class TagComponent implements OnInit {
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 15;

    tags: Tag[];
    tagForm: FormGroup;

    @Select(TagState.getTags)
    tags$: Observable<Tag[]>;

    constructor(
        private store: Store,
        private fb: FormBuilder,
        private modalService: NgbModal,
        private toast: ToastrService
    ) { }

    ngOnInit() {
        this.store.dispatch(new FetchTag()).subscribe();
        this.tags$.subscribe(tags => {
            console.log('tags:: ', tags);

            this.tags = tags;
        });

        this.tagForm = this.fb.group({
            name: ['', Validators.required],
            id: [0, Validators.required]
        });
    }

    selectAll(e) {
        if (this.allSelected) {

        }
    }

    /**
     * Show teh popup form to add tag
     * @param content 
     */
    openModal(content, option: string, tag?: Tag) {
        if (option.toLowerCase() === 'set') {
            this.tagForm.setValue({ name: tag.name, id: tag.id });
        }
        else if (option.toLowerCase() === 'delete') {
            this.tagForm.setValue({ name: tag.name, id: tag.id });
        }
        else { // create
            this.tagForm.setValue({ name: '', id: 0 });
        }

        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((tag: Tag) => {
                switch (option) {
                    case 'create':
                        this.addTag(tag);
                        break;
                    case 'set':
                        this.setTag(tag);
                        break;
                    case 'delete':
                        this.deleteTag(tag);
                        break;
                }
            }, (reason) => {
                console.log('Err!', reason);
            });
    }

    addTag(tag: Tag) {
        console.log('Create Tag:: ', tag);
        this.store.dispatch(new AddTag({ ...tag })).subscribe(
            () => {
                this.toast.success('etiqueta añadida', 'Finalizado');
            },
            error => {
                this.toast.error(error.message);
            }
        );

    }

    setTag(tag: Tag) {
        console.log('Set Tag:: ', tag);
        this.store.dispatch(new UpdateTag({ ...tag })).subscribe(
            () => {
                this.toast.success('etiqueta actualizada', 'Finalizado');
            },
            error => {
                this.toast.error(error.message);
            }
        );
    }


    deleteTag(tag: Tag) {
        console.log('del Tag:: ', tag);

        this.store.dispatch(new DeleteTag(tag.id)).subscribe(
            () => {
                this.toast.success('etiqueta eliminada', 'Finalizado');
            },
            error => {
                this.toast.error(error.message);
            }
        );
    }

}
