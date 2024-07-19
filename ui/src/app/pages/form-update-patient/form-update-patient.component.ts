import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-update-patient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-update-patient.component.html',
  styleUrl: './form-update-patient.component.scss'
})
export class FormUpdatePatientComponent implements OnInit {

  updateForm: FormGroup;
  user: User | null = null;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.updateForm = this.fb.group({
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      this.updateForm.patchValue({
        address: this.user.address,
        phoneNumber: this.user.phoneNumber
      });
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid && this.user) {
      const updatedUser: User = {
        ...this.user,
        ...this.updateForm.value
      };
      this.userService.updateUser(updatedUser).subscribe();
      this.userService.user = updatedUser;
      this.router.navigate(['/detail-patient']);
    }
  }
}
