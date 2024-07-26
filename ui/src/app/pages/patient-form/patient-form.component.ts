import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit  {
  firstName: string = '';
  lastName: string = '';

  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('admin', 'password').subscribe(
      response => {
        console.log('Token:', response);
        this.authService.setToken = response;
      },
      error => {
        console.error('Erreur lors de la connexion:', error);
      }
    );
  }

  onSubmit() {
    this.userService.getUserByName(this.firstName, this.lastName).subscribe(
      (response: User) => {
        console.log("response " + response.firstName);
        this.userService.user = response;
        this.router.navigate(['detail-patient']);
      },
      (error) => {
        this.errorMessage = 'User not found';
        console.error(error);
      }
    );
  }
}
