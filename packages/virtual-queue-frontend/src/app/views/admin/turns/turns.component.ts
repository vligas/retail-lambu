import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Observable } from 'rxjs';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';
import { FetchTurns } from '@frontend/app/shared/state/turn/turn.action';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent implements OnInit {


  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;
  turns: Turn[];


  constructor(
    private store: Store
  ) { }

  ngOnInit() {


    this.store.dispatch(new ConnectWebSocket());

    this.store.dispatch(new FetchTurns()).subscribe();

    this.turns$.subscribe(turns => {
      this.turns = turns;
    });
  }

}
