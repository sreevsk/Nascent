import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/portfolio-data.json';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.scss']
})
export class OurPortfolioComponent implements OnInit {
  portfolioItems: any = data["companies"];
  constructor() { }

  ngOnInit(): void {
  }

}
