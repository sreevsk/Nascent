import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gis-services',
  templateUrl: './gis-services.component.html',
  styleUrls: ['./gis-services.component.scss']
})
export class GisServicesComponent implements OnInit {

  active = 1;

  private gisItems = [
    { text: '1. transportation; road, rail, shipping, ports and logistics companies' },
    { text: '2. municipalities, councils and local governments' },
    { text: '3. town planners, surveyors, developers, builders, and engineers' },
    { text: '4. water and drainage, electricity, telephone, and gas utilities' },
    { text: '5. emergency services, police, health service planners' },
    { text: '6. scientists, environmental protection and natural resource management' },
    { text: '7. franchise stores and restaurants, marketing companies' }
  ];
  private dpItems = [
    { text: '1. aerial triangulations for aerial photos' },
    { text: '2. stereo compilation' },
    { text: '3. topographic / planimetric mapping and updating' },
    { text: '4. dem / dtm / contour generation' },
    { text: '5. orthophoto generation / mosaicing / tiling' },
  ];
  private uavItems = [
    { text: '1. UAV services for road & railway network' },
    { text: '2. UAV services for local authority / municipalities' },
    { text: '3. UAV services for mine sites' },
    { text: '4. UAV services for agriculture' },
    { text: '5. videography' },
  ]
  private alItems = [
    { text: '1. agriculture & forestry' },
    { text: '2. dam & reservoir' },
    { text: '3. flood study' },
    { text: '4. railways' },
    { text: '5. mine site' },
    { text: '6. pipelines' },
    { text: '7. slope analysis' },
    { text: '8. telecommunication & urban planning' },
    { text: '9. transmission lines' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
