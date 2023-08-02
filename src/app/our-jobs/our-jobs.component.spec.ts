import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurJobsComponent } from './our-jobs.component';

describe('OurJobsComponent', () => {
  let component: OurJobsComponent;
  let fixture: ComponentFixture<OurJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
