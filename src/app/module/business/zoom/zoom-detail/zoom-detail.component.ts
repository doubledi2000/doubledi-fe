import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom-detail',
  templateUrl: './zoom-detail.component.html',
  styleUrls: ['./zoom-detail.component.scss']
})
export class ZoomDetailComponent implements OnInit {
  seats: any[] = [
    {
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },{
      type: 'normal',
      status: 'AVAILABLE'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.seats.length)
  }

}
