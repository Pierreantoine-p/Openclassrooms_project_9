import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { SourceTextModule } from 'vm';

@Component({
  selector: 'app-patient-form-add',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './patient-form-add.component.html',
  styleUrl: './patient-form-add.component.scss'
})
export class PatientFormAddComponent {

  createUserForm: FormGroup;
  user: User | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createUserForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      birthDate: [''],
      gender: [''],
      address: [''],
      phoneNumber: ['']
    });
  }

  onSubmit(): void {
      const newUser: User = this.createUserForm.value;
      this.userService.addUser(newUser);
     this.userService.getUserByName(newUser.firstName,newUser.lastName ).subscribe(
      user => {
        //this.user = user;
        this.userService.user = user;
        this.router.navigate(['/detail-patient']);
      },
      error => {
        console.error("Error fetching user by name: ", error);
      }
    );
  }
}
