import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Observable } from 'rxjs';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';
import { FetchTurns } from '@frontend/app/shared/state/turn/turn.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent implements OnInit {


  turnForm: FormGroup;

  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;
  turns: Turn[];


  constructor(
    private fb: FormBuilder,
    private store: Store,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {


    this.store.dispatch(new ConnectWebSocket());

    this.store.dispatch(new FetchTurns()).subscribe();

    this.turns$.subscribe(turns => {
      this.turns = turns;
    });

    this.turnForm = this.fb.group({
      name: ['', Validators.required],
      denomination: ['', Validators.required]
    });

  }


  /**
* Show teh popup form to add category
* @param content 
*/
  open(content) {
    console.log('Contenido del modal', content);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        // tslint:disable-next-line:switch-default

      }, (reason) => {
        console.log('Err!', reason);
      });
  }

}
