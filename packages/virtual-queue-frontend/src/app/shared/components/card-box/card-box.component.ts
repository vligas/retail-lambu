import { Component, OnInit, Input } from '@angular/core';
import { Turn } from '../../models/turn.model';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss']
})
export class CardBoxComponent implements OnInit {

  @Input() item: Turn;

  constructor() { }

  ngOnInit() {
  }

}
