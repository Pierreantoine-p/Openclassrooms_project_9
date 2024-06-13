import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPatientComponent } from './status-patient.component';

describe('StatusPatientComponent', () => {
  let component: StatusPatientComponent;
  let fixture: ComponentFixture<StatusPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
