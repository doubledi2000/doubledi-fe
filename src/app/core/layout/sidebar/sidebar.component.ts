import { Component, OnInit, Input } from '@angular/core';
import { SidebarConstant } from './sidebar.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() isCollapsed = false;
  sidebar = SidebarConstant;

  constructor() { }

  ngOnInit(): void {
  }

}
