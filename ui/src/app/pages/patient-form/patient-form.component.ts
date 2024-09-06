import { Component } from '@angular/core';
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
export class PatientFormComponent {
  firstName: string = '';
  lastName: string = '';

  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

  onSubmit() {
    this.userService.getUserByName(this.firstName, this.lastName).subscribe({
      next:
      (response: User) => {
        this.userService.user = response;
        this.router.navigate(['detail-patient']);
      },
      error : (e ) =>{
        console.log("error "+ e)
      }
    }

    );
  }
}
