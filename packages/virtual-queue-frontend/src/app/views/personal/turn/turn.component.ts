import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { QueueService } from '@frontend/app/shared/services/http/queue.service';
import { FetchTurns } from '@frontend/app/shared/state/turn/turn.action';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss']
})
export class TurnComponent implements OnInit {

  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;
  turn: Turn;

  constructor(
    private activatedRoute: ActivatedRoute,
    private queueService: QueueService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(new ConnectWebSocket());
    this.turns$.subscribe(turns => {
      // tslint:disable-next-line:ban
      const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
      this.turn = turns.find(turn => turn.id === id);
      if (!this.turn) {
        this.router.navigate(['personal/select-turn']);
      }
    });
  }

  nextTurn() {
    this.queueService.nextTurn(this.turn).subscribe()
  }

  onNavBack() {
    this.router.navigate(['personal/select-turn']);
  }

}
