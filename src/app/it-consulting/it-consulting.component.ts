import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/it-consulting-data.json';

@Component({
  selector: 'app-it-consulting',
  templateUrl: './it-consulting.component.html',
  styleUrls: ['./it-consulting.component.scss']
})
export class ItConsultingComponent implements OnInit {
  description: string = data['description'];
  services = data['services'];
  customArray: number[] = [];

  constructor() {
    this.generateCustomArray(this.services.length / 2, 2);
  }

  ngOnInit(): void {

  }

  generateCustomArray(length: number, increment: number): void {
    for (let i = 0; i < length; i++) {
      this.customArray.push(i * increment);
    }
  }
}
