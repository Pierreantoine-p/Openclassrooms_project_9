import { Component } from '@angular/core';
import { PatientFormComponent } from '../patient-form/patient-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PatientFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router : Router) {}

  redirectToAddPatient(){
    this.router.navigate(['/patient-form-add']);

  }
}
