import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  hh: string
  mm: string
  ss: string
  constructor() { }

  ngOnInit() {

    setInterval(() => {
      let date = new Date();
      this.hh = this.addZeros(date.getHours());
      this.mm = this.addZeros(date.getMinutes());
      this.ss = this.addZeros(date.getSeconds());
    });
  }

  addZeros(numero: number) {
    if (numero < 10) {
      return '0' + numero.toString()
    }
    else {
      return numero.toString()
    }
  }
}
