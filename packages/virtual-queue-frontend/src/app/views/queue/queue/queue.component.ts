import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '@retail/shared';
import { Store, Select } from '@ngxs/store';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { Observable } from 'rxjs';
import { FetchTurns } from '@frontend/app/shared/state/turn/turn.action';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {


  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;
  turns: Turn[];

  constructor(private store: Store) { }

  ngOnInit() {

    this.store.dispatch(new ConnectWebSocket());

    this.store.dispatch(new FetchTurns()).subscribe();

    this.turns$.subscribe(turns => {
      this.turns = [...turns];
    });
  }
}
