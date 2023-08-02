import { Injectable } from '@angular/core';
import data from '@assets/properties/job-data.json';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  jobItems: any = data;
  jobItemsMap: Map<string, any>;

  constructor() {
    this.jobItemsMap = this.convertJsonToMap(this.jobItems["jobs"], a => a["details"]["jobId"]);
  }


  getJobItemsMap() {
    return this.jobItemsMap;
  }

  getJobPageData() {
    return this.jobItems["jobs"];
  }

  getJobPageNameSet(){
    return data["nameSet"];
  }

  convertJsonToMap(jsonData: any, keyFunc: any): Map<string, any> {
    const map = new Map<string, any>();
    for (const item of jsonData) {
      map.set(keyFunc(item).trim(), item);
    }
    return map;
  }

}
