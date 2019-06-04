import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '@retail/shared';
import { Store, Select } from '@ngxs/store';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { Observable } from 'rxjs';
import { FetchTurns } from '@frontend/app/shared/state/turn/turn.action';
//import { FetchConfig } from '@frontend/app/shared/state/config/config.actions';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';
//import { ConfigState } from '@retail/virtual-queue-frontend/src/app/shared/state/config/config.state';
//import { MediaConfig } from '@retail/virtual-queue-frontend/src/app/shared/models/config.model';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {


  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;
  turns: Turn[];

  // @Select(ConfigState.configurations)
  //configuration$: Observable<MediaConfig[]>;

  videos = [];


  constructor(private store: Store) { }

  ngOnInit() {

    this.store.dispatch(new ConnectWebSocket());

    this.store.dispatch(new FetchTurns()).subscribe();

    //  this.store.dispatch(new FetchConfig()).subscribe();


    this.turns$.subscribe(turns => {
      this.turns = turns;
    });


  }
}
