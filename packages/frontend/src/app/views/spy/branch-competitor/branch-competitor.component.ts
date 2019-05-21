import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { CompetitorService } from '@retail/shared/services/competitor.service';
import { Competitor, Branch, BranchCompetitor } from '@retail/shared';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { DeleteBranchCompetitor, AddBranchCompetitor, UpdateBranchCompetitor } from '@retail/shared/state/branchOfficeCompetitor/branchOfficeCompetitor.actions';
import { CompetitorState } from '@retail/shared/state/competitor/competitor.state';
import { ChangeCompetitorId } from '@retail/shared/state/competitor/competitor.actions';
@Component({
  selector: 'app-branch-competitor',
  templateUrl: './branch-competitor.component.html',
  styleUrls: ['./branch-competitor.component.scss'],
  animations: [SharedAnimations]
})
export class BranchCompetitorComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  tittleModal = 'Nueva Sucursal';
  competitor: Competitor;
  branch: Branch[];
  brandForm: FormGroup;
  filterForm: FormGroup;
  @Select(CompetitorState.selectCompetitor)
  selectCompetitor$: Observable<Competitor>;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private competitorService: CompetitorService,
    private store: Store,
    private toast: ToastrService
  ) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe(params => {
      ///get Competitor
      this.store.dispatch(new ChangeCompetitorId(params['idCompetitor'])).subscribe();

      this.selectCompetitor$.subscribe(data => {
        if (data) {
          this.competitor = data;
          this.branch = data.branchOffices;

        }
      });
    });

    this.brandForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.filterForm = this.fb.group({
      search: [''],
      name: [''],
      location: ['']
    });

  }
  open(content, option: number, brand?: BranchCompetitor) {

    if (option === 1) {
      this.tittleModal = 'Nueva Sucursal';

      this.brandForm.setValue({ name: '', location: '' });
    } else {
      this.tittleModal = 'Editar Sucursal';
      this.brandForm.setValue({ name: brand.name, location: brand.location });
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })

      // tslint:disable-next-line:no-any
      .result.then((result: any) => {
        // tslint:disable-next-line:switch-default
        switch (option) {
          case 1:
            this.addBranch(result);
            break;
          case 2:
            this.editBranch(brand);
            break;
        }
      }, (reason) => {
        console.log('Err!', reason);
      });
  }
  deleteBranch(branch: BranchCompetitor) {
    this.store.dispatch(new DeleteBranchCompetitor(branch.id)).subscribe(
      () => {
        this.store.dispatch(new ChangeCompetitorId(this.competitor.id)).subscribe();
        this.toast.success('Competidor Eliminado', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

  addBranch(branch: BranchCompetitor) {
    this.store.dispatch(new AddBranchCompetitor({ ...this.brandForm.value, competitorId: this.competitor.id })).subscribe(
      () => {
        this.store.dispatch(new ChangeCompetitorId(this.competitor.id)).subscribe();
        this.toast.success('Sucursal de la competencia añadida', 'Finalizado');

      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

  editBranch(branch: BranchCompetitor) {
    this.store.dispatch(new UpdateBranchCompetitor(branch.id, { ...this.brandForm.value })).subscribe(
      () => {
        this.store.dispatch(new ChangeCompetitorId(this.competitor.id)).subscribe();
        this.toast.success('Competidor actualizado', 'Finalizado');
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

}
