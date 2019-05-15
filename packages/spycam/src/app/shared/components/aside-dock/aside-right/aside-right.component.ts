import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-right',
  templateUrl: './aside-right.component.html',
  styleUrls: ['./aside-right.component.scss']
})
export class AsideRightComponent implements OnInit {

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() style;
  @Input() icon = 'i-Gear';
  @Input() title = 'title';
  @Input() styleIcon: string;
  @Input() isOpen;
  constructor() { }

  ngOnInit() {
  }

  handleAside() {
    this.toggle.emit();
  }

}
