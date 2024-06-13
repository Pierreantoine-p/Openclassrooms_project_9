import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePatientAddComponent } from './note-patient-add.component';

describe('NotePatientAddComponent', () => {
  let component: NotePatientAddComponent;
  let fixture: ComponentFixture<NotePatientAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotePatientAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotePatientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
