import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisServicesComponent } from './gis-services.component';

describe('GisServicesComponent', () => {
  let component: GisServicesComponent;
  let fixture: ComponentFixture<GisServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GisServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GisServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
