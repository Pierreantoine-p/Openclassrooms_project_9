import { Component } from '@angular/core';
import { PatientFormComponent } from '../patient-form/patient-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PatientFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
