import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-our-jobs',
  templateUrl: './our-jobs.component.html',
  styleUrls: ['./our-jobs.component.css']
})
export class OurJobsComponent implements OnInit {
  searchText: string = '';
  jobItems: any;
  unfilteredJobItems: any;
  customArray: number[] = [];
  jobCategories: any;
  jobTypes: any;
  jobLocations: any;

  constructor(private sharedDataService: SharedDataService) {
    this.unfilteredJobItems = sharedDataService.getJobPageData().filter(item => item["available"] == true)
    this.jobItems = [...this.unfilteredJobItems];
    this.jobCategories = new Set(this.jobItems.map(obj => obj["jobCategory"]));
    this.jobTypes = new Set(this.jobItems.map(obj => obj["type"]));
    this.jobLocations = new Set(this.jobItems.map(obj => obj["location"]));
    this.generateCustomArray(this.jobItems.length, 3);
  }

  ngOnInit(): void {
  }

  generateCustomArray(length: number, increment: number): void {
    this.customArray = [];
    for (let i = 0; i < length; i = i + increment) {
      this.customArray.push(i);
    }
  }

  filter(text: string, filterText: string) {
    this.jobItems = this.unfilteredJobItems.filter(obj => obj[filterText] === text);
    this.generateCustomArray(this.jobItems.length, 3);
  }

  onSearch() {
    this.jobItems = this.unfilteredJobItems.filter(obj => obj["title"].toUpperCase().includes(this.searchText.toUpperCase()));
    this.generateCustomArray(this.jobItems.length, 3);
  }

  getJobId(job: any) {
    return job.details.jobId.trim();
  }

}
