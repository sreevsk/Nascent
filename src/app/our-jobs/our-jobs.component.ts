import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-our-jobs',
  templateUrl: './our-jobs.component.html',
  styleUrls: ['./our-jobs.component.scss'],
})
export class OurJobsComponent implements OnInit, AfterViewInit {

  @ViewChild('jobCategory', { static: false }) dropDown: ElementRef;
  // @ViewChild('jobType', { static: false }) jobType: ElementRef;
  // @ViewChild('jobLocation', { static: false }) jobLocation: ElementRef;


  searchText: string = '';
  jobItems: any;
  unfilteredJobItems: any;
  customArray: number[] = [];
  jobCategories: any;
  jobTypes: any;
  jobLocations: any;


  jobCategoryDefaultTitle: string = "All Job Categories";
  jobTypeDefaultTitle: string = "All Job Types";
  jobLocationDefaultTitle: string = "All Job Locations";
  selectedJobCategory = this.jobCategoryDefaultTitle;
  selectedJobType = this.jobTypeDefaultTitle;
  selectedJobLocation = this.jobLocationDefaultTitle;


  constructor(private sharedDataService: SharedDataService, private renderer: Renderer2) {
    this.unfilteredJobItems = sharedDataService.getJobPageData().filter(item => item["available"] == true)
    this.jobItems = [...this.unfilteredJobItems];

    this.jobCategories = this.populateSetWithInitialValue(this.jobCategoryDefaultTitle, this.jobItems.map(obj => obj["jobCategory"]));
    this.jobTypes = this.populateSetWithInitialValue(this.jobTypeDefaultTitle, this.jobItems.map(obj => obj["type"]));
    this.jobLocations = this.populateSetWithInitialValue(this.jobLocationDefaultTitle, this.jobItems.map(obj => obj["location"]));

    this.generateCustomArray(this.jobItems.length, 3);
  }


  populateSetWithInitialValue(value: string, valueArr) {
    const mySet = new Set();
    mySet.add(value)
    valueArr.forEach(value => mySet.add(value));
    return mySet;
  }

  ngOnInit(): void {
  }

  generateCustomArray(length: number, increment: number): void {
    this.customArray = [];
    for (let i = 0; i < length; i = i + increment) {
      this.customArray.push(i);
    }
  }

  ngAfterViewInit() {
  }

  cascadeButtonData(text) {
    if (this.dropDown) {
      const elementWidth = this.dropDown.nativeElement.offsetWidth;
      return text.length * 10 > elementWidth ? text.substring(0, 18) + ".." : text;
    }
  }

  clearSearch() {
    this.searchText = '';
    this.selectedJobCategory = this.jobCategoryDefaultTitle;
    this.selectedJobLocation = this.jobLocationDefaultTitle;
    this.selectedJobType = this.jobTypeDefaultTitle;
    this.filter();
  }

  filter() {
    this.jobItems = this.unfilteredJobItems
      .filter(obj =>
        (this.searchText == undefined || this.searchText === '' || obj['title'].toUpperCase().includes(this.searchText.toUpperCase())) &&
        (this.jobCategoryDefaultTitle === this.selectedJobCategory || obj['jobCategory'] === this.selectedJobCategory) &&
        (this.jobTypeDefaultTitle === this.selectedJobType || obj['type'] === this.selectedJobType) &&
        (this.jobLocationDefaultTitle === this.selectedJobLocation || obj['location'] === this.selectedJobLocation));
    this.generateCustomArray(this.jobItems.length, 3);
  }

  getJobId(job: any) {
    return job.details.jobId.trim();
  }

}
