import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-add-patient',
  standalone: true,
  imports: [],
  templateUrl: './form-add-patient.component.html',
  styleUrl: './form-add-patient.component.scss'
})
export class FormAddPatientComponent {

  newUser: User = new User();
  errorMessage: string = '';

  constructor(private router: Router,private userService: UserService) {}

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(
      (response: User) => {
        this.userService.setUser(response);
        this.router.navigate(['/patient-details']);

        //this.newUser = new User();
      },
      (error) => {
        this.errorMessage = 'Failed to add user';
        console.error(error);
      }
    );
    }

}
