import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  Competitor,
  CompetitorState,
  FetchCompetitor,
  SaveActualCompetitor,
  RequestCompetitorBrandDto
} from '@retail/shared';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.scss'],
})
export class CompetitorComponent implements OnInit {

  competitors: Competitor[];
  selectedCompetitor: Competitor;
  competitorBrandForm: FormGroup;

  @Select(CompetitorState.getAllCompetitors)
  competitors$: Observable<Competitor[]>;
  brand: RequestCompetitorBrandDto;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit() {
    this.competitorBrandForm = this.fb.group({
      id: ['', Validators.required],
      competitorId: ['', Validators.required],
      name: [''],
      location: [''],
    });

    this.store.dispatch(new FetchCompetitor()).subscribe();

    this.competitors$.subscribe(competitors => {
      this.competitors = competitors;
    });
  }

  swapStore() {

    const competitorId: number = this.competitorBrandForm.get('competitorId').value;
    this.selectedCompetitor = this.competitors.find(item => {
      return competitorId == item.id;
    });
  }

  changeValuesBrand() {
    const competitorId: number = this.competitorBrandForm.get('competitorId').value;
    const id: number = this.competitorBrandForm.get('id').value;
    const brand = this.competitors.find(item => {
      return competitorId == item.id;
    }).branchOffices.find(item => {
      return item.id == id;
    });

    this.brand = brand;
  }

  acept() {

    this.store.dispatch(new SaveActualCompetitor(this.brand)).subscribe();
    this.router.navigateByUrl('/business');
  }


}
