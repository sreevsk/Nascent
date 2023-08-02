import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/support-data.json';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  supportItems: any = data;
  customArray: number[] = [];
  constructor() {
    this.generateCustomArray(data.length / 2, 2);
  }

  ngOnInit(): void {
  }

  generateCustomArray(length: number, increment: number): void {
    for (let i = 0; i < length; i++) {
      this.customArray.push(i * increment);
    }
  }
}

