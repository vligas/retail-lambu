import { Component, OnInit, AfterContentInit, QueryList, ContentChildren, EventEmitter, Output } from '@angular/core';
import { AsideRightComponent } from './aside-right/aside-right.component';

@Component({
  selector: 'app-aside-dock',
  templateUrl: './aside-dock.component.html',
  styleUrls: ['./aside-dock.component.scss']
})
export class AsideDockComponent implements OnInit, AfterContentInit {
  @ContentChildren(AsideRightComponent) asides: QueryList<AsideRightComponent>;
  @Output() opened: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  /**
 * Invoked when all children (groups) are ready
 */
  ngAfterContentInit() {
    // console.log (this.groups);
    // Set active to first element
    //this.groups.toArray()[0].isOpen = true;
    // Loop through all Groups
    this.asides.toArray().forEach((t, i) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      t.toggle.subscribe(() => {
        // Open the group
        this.openAside(i);
      });
      /*t.toggle.subscribe((group) => {
        // Open the group
        this.openGroup(group);
      });*/
    });
  }


  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openAside(index: number) {
    // close other groups

    this.asides.toArray().forEach((t, i) => {
      if (index !== i) {
        t.isOpen = false;
      } else {
        t.isOpen = !t.isOpen;
        if (t.isOpen) {
          this.opened.next(index);
        }
        else {
          this.opened.next(undefined);
        }
      }
    });

  }

}
