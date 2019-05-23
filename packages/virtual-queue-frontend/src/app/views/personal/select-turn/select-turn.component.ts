import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { Observable } from 'rxjs';
import { FetchTurns } from '@frontend/app/shared/state/turn/turn.action';

@Component({
  selector: 'app-select-turn',
  templateUrl: './select-turn.component.html',
  styleUrls: ['./select-turn.component.scss']
})
export class SelectTurnComponent implements OnInit {
  
  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new FetchTurns()).subscribe();
  }

}
