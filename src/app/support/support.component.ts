import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/support-data.json';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  supportItems: any = data;
  constructor() { }

  ngOnInit(): void {
  }

}

