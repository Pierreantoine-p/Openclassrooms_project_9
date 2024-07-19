import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPatientComponent } from './notes-patient.component';

describe('NotesPatientComponent', () => {
  let component: NotesPatientComponent;
  let fixture: ComponentFixture<NotesPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
