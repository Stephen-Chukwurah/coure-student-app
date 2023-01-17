import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  showMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

}

