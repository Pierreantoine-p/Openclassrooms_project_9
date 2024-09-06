import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}


  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log("response " + JSON.stringify(response));
        this.authService.setToken(response.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = 'Username or password is incorrect.';
        console.error(error);
      }
    );
    }
  }
