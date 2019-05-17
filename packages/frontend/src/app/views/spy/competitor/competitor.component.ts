import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared/animations/shared-animations';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { AddCompetitor, UpdateCompetitor, FetchCompetitor, DeleteCompetitor } from '@retail/shared/state/competitor/competitor.actions';
import { Store, Select } from '@ngxs/store';
import { Competitor } from '@retail/shared/models/competitor.model';
import { CompetitorState } from '@retail/shared/state/competitor/competitor.state';
import { Router, ActivatedRoute } from '@angular/router';
import { CompetitorService } from '@retail/shared/services/competitor.service';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.scss'],
  animations: [SharedAnimations]
})
export class CompetitorComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  tittleModal = 'Nuevo Competidor';

  competitorForm: FormGroup;
  filterForm: FormGroup;
  competitors: Competitor[];
  @Select(CompetitorState.getAllCompetitors) competitors$: Observable<Competitor[]>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private competitorService: CompetitorService
  ) {

  }


  ngOnInit() {

    this.store.dispatch(new FetchCompetitor()).subscribe();
    this.competitors$.subscribe(competitors => {
      this.competitors = competitors;
    });
    this.competitorForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.filterForm = this.fb.group({
      search: [''],
      name: ['']
    });

  }

  /**
* Show teh popup form to add category
* @param content 
*/
  open(content, option: number, competitor?: any) {

    if (option === 1) {
      this.tittleModal = 'Nuevo Competidor';
      this.competitorForm.setValue({ name: '' });
    } else {
      this.tittleModal = 'Editar Competidor';
      this.competitorForm.setValue({ name: competitor.name });
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })

      .result.then((result: any) => {
        console.log('entree');
        // tslint:disable-next-line:switch-default
        switch (option) {
          case 1:
            // add category

            this.addCompetitor(result);
            break;
          case 2:
            // edit category
            this.editCurrency(competitor);
            break;
        }
      }, (reason) => {
        console.log('Err!', reason);
      });
  }
  deleteCompetitor(competitor: Competitor) {
    this.store.dispatch(new DeleteCompetitor(competitor.id)).subscribe(
      () => {
        this.toast.success('Competidor Eliminado', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

  addCompetitor(competitor: Competitor) {
    this.store.dispatch(new AddCompetitor({ ...this.competitorForm.value })).subscribe(
      () => {
        this.toast.success('Competidor añadido', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );

  }

  editCurrency(competitor: Competitor) {
    this.store.dispatch(new UpdateCompetitor(competitor.id, { ...this.competitorForm.value })).subscribe(
      () => {
        this.toast.success('Competidor actualizado', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }
  navToDetail(obj) {
    this.router.navigate(['spy/competitor', obj.id]);
  }

}
