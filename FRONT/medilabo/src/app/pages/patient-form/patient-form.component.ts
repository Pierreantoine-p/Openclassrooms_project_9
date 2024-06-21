import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  firstName: string = '';
  lastName: string = '';

  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

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
