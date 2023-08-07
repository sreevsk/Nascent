import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-our-jobs',
  templateUrl: './our-jobs.component.html',
  styleUrls: ['./our-jobs.component.css']
})
export class OurJobsComponent implements OnInit {

  jobItems: any;
  customArray: number[] = [];
  constructor(private sharedDataService: SharedDataService) {
    this.jobItems = sharedDataService.getJobPageData().filter(item => item["available"] == true);
    this.generateCustomArray(this.jobItems.length, 3);
  }

  ngOnInit(): void {
  }

  generateCustomArray(length: number, increment: number): void {
    for (let i = 0; i < length; i = i + increment) {
      this.customArray.push(i);
    }
  }

  getJobId(job: any) {
    return job.details.jobId.trim();
  }

}
