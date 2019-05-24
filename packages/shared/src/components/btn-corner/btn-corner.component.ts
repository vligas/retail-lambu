import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-corner',
  templateUrl: './btn-corner.component.html',
  styleUrls: ['./btn-corner.component.scss']
})
export class BtnCornerComponent implements OnInit {
  @Input('icon') icon: string;

  @Output()
  click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  propagate(event: any) {
    console.log('entree');
    this.click.emit(event);
  }

}
