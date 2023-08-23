import { Component, OnInit } from '@angular/core';
import data from '@assets/properties/portfolio-data.json';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.scss']
})
export class OurPortfolioComponent implements OnInit {
  portfolioItems: any = data["companies"];
  customArray: number[] = [];
  description;

  constructor(private modalService: NgbModal) {
    this.generateCustomArray(data["companies"].length / 3, 2);
  }

  ngOnInit(): void {
  }

  generateCustomArray(length: number, increment: number): void {
    for (let i = 0; i < length; i++) {
      this.customArray.push(i * increment);
    }
  }

  sendEmail(content, description) {
    this.openModal(content);
    this.description = description;

  }

  openModal(content) {
    this.modalService.open(content, { windowClass: 'modal-mini', centered: true }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
