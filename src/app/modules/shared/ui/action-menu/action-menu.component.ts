import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit {
  @Input() menuItems: any[] = [];
  @Output() onItemClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleItemClick(item: any) {    
    this.onItemClicked.emit(item);
  }

}
