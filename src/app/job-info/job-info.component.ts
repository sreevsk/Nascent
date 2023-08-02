import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})
export class JobInfoComponent implements OnInit {
  jobItemsMap;
  currentJobInfo: any;
  nameSet: any;
  nameSetKeys: any;

  constructor(private route: ActivatedRoute, private sharedDataService: SharedDataService) {
    this.jobItemsMap = sharedDataService.getJobItemsMap();
    this.nameSet = sharedDataService.getJobPageNameSet();
    this.nameSetKeys = Object.keys(this.nameSet);
    console.log();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.currentJobInfo = this.jobItemsMap.get(id);
      console.log('test '+this.currentJobInfo.details['jobResponsibilities']);
      console.log();
    });
  }

}
