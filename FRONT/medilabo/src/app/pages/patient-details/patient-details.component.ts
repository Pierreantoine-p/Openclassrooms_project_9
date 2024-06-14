import { Component, OnInit } from '@angular/core';
import { NotesPatientComponent } from "../../component/user/notes-patient/notes-patient.component";
import { StatusPatientComponent } from "../../component/user/status-patient/status-patient.component";
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-patient-details',
    standalone: true,
    templateUrl: './patient-details.component.html',
    styleUrl: './patient-details.component.scss',
    imports: []
})
export class PatientDetailsComponent{

}
