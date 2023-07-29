import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gis-services',
  templateUrl: './gis-services.component.html',
  styleUrls: ['./gis-services.component.scss']
})
export class GisServicesComponent implements OnInit {

  active = 1;

  private gisItems = [
    { text: '1. TRANSPORTATION; ROAD, RAIL, SHIPPING, PORTS AND LOGISTICS COMPANIES' },
    { text: '2. MUNICIPALITIES, COUNCILS AND LOCAL GOVERNMENTS' },
    { text: '3. TOWN PLANNERS, SURVEYORS, DEVELOPERS, BUILDERS, AND ENGINEERS' },
    { text: '4. WATER AND DRAINAGE, ELECTRICITY, TELEPHONE, AND GAS UTILITIES' },
    { text: '5. EMERGENCY SERVICES, POLICE, HEALTH SERVICE PLANNERS' },
    { text: '6. SCIENTISTS, ENVIRONMENTAL PROTECTION AND NATURAL RESOURCE MANAGEMENT' },
    { text: '7. FRANCHISE STORES AND RESTAURANTS, MARKETING COMPANIES' }
  ];
  private dpItems = [
    { text: '1. AERIAL TRIANGULATIONS FOR AERIAL PHOTOS' },
    { text: '2. STEREO COMPILATION' },
    { text: '3. TOPOGRAPHIC / PLANIMETRIC MAPPING AND UPDATING' },
    { text: '4. DEM / DTM / CONTOUR GENERATION' },
    { text: '5. ORTHOPHOTO GENERATION / MOSAICING / TILING' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
