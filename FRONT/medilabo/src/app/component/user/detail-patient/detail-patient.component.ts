import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importer RouterModule

@Component({
  selector: 'app-detail-patient',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './detail-patient.component.html',
  styleUrl: './detail-patient.component.scss'
})
export class DetailPatientComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
