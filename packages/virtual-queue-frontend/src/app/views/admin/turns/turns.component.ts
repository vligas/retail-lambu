import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { TurnState } from '@frontend/app/shared/state/turn/turn.state';
import { Observable } from 'rxjs';
import { Turn } from '@frontend/app/shared/models/turn.model';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';
import { FetchTurns, UpdateTurns } from '@frontend/app/shared/state/turn/turn.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveActualCompetitor } from '@retail/shared';


@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent implements OnInit {


  turnForm: FormGroup;
  videoSrc: string;

  @Select(TurnState.getTurns)
  turns$: Observable<Turn[]>;
  turns: Turn[];


  constructor(
    private fb: FormBuilder,
    private store: Store,
    private modalService: NgbModal
  ) { }

  ngOnInit() {


    this.store.dispatch(new ConnectWebSocket());

    this.store.dispatch(new FetchTurns()).subscribe();

    this.turns$.subscribe(turns => {
      this.turns = turns;
    });

    this.turnForm = this.fb.group({
      limit: ['', Validators.required],
      currentTurn: ['', Validators.required]
    });

  }


  /**
* Show teh popup form to add category
* @param content 
*/
  open(content, turn: Turn, option: number) {
    console.log('Contenido del modal', turn);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        // tslint:disable-next-line:switch-default
        if (option === 1) {
          console.log('save changes', result);
          this.saveChanges(result);

        }

        if (option === 2) {
          console.log('confirm reset', result);
          this.reset(turn);

        }

      }, (reason) => {
        console.log(reason);
      });
  }

  saveChanges(turn: Turn) {
    //this.store.dispatch(new UpdateTurn()).subscribe();
  }

  reset(turn: Turn) {
    const newTurn: Turn = {
      id: turn.id,
      actualTurn: 0,
      name: turn.name,
      limitTurn: turn.limitTurn,
      color: turn.color,
      pathImg: turn.pathImg
    };

    console.log(newTurn);
    this.store.dispatch(new UpdateTurns(newTurn)).subscribe();
  }

}
