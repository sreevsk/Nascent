import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProjectServicesComponent } from './it-project-services.component';

describe('ItProjectServicesComponent', () => {
  let component: ItProjectServicesComponent;
  let fixture: ComponentFixture<ItProjectServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItProjectServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItProjectServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
