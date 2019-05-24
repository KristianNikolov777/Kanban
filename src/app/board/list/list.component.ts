import { Component, Input, OnInit } from '@angular/core';

import { List } from '../../shared/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;

  constructor() { }

  ngOnInit() {
  }

}
