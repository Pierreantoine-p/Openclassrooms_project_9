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
    this.user = this.userService.getUser();
  }
}
/*
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../service/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-patient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detail-patient.component.html',
  styleUrl: './detail-patient.component.scss'
})
export class DetailPatientComponent implements OnInit {
  userForm: FormGroup;
  user: User | null = null;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      this.userForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser: Partial<User> = this.userForm.value;
      this.userService.updateUser(updatedUser).subscribe((response) => {
        console.log('User updated successfully', response);
        // Mettre à jour les champs dans le composant après la mise à jour réussie
        this.user = { ...this.user, ...updatedUser };
      });
    }
  }

}
*/
