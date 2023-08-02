import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/portfolio-data.json';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.scss']
})
export class OurPortfolioComponent implements OnInit {
  portfolioItems: any = data["companies"];
  customArray: number[] = [];
  constructor() { 
    this.generateCustomArray(data["companies"].length / 2, 2);
  }

  ngOnInit(): void {
  }

  generateCustomArray(length: number, increment: number): void {
    for (let i = 0; i < length; i++) {
      this.customArray.push(i * increment);
    }
  }

}
