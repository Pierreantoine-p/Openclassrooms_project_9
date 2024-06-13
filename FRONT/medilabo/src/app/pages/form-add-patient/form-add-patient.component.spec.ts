import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPatientComponent } from './form-add-patient.component';

describe('FormAddPatientComponent', () => {
  let component: FormAddPatientComponent;
  let fixture: ComponentFixture<FormAddPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
