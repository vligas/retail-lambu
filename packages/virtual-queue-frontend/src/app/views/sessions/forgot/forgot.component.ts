import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from '@retail/shared';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
