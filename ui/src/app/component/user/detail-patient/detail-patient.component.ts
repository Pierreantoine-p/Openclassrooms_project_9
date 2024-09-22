import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotesPatientComponent } from "../notes-patient/notes-patient.component";
import { StatusPatientComponent } from "../status-patient/status-patient.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-patient',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NotesPatientComponent, StatusPatientComponent],
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.scss']
})
export class DetailPatientComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UserService, private router: Router,) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  redirectToUpdatePatient() {
    this.router.navigate(['/form-update-patient']);
  }
}
