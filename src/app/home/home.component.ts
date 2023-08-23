import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/home-data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  focus: any;
  focus1: any;
  services = data['services-section']['services'];
  supports_section = data['supports-section'];

  constructor() { }

  ngOnInit() {
  }

}
