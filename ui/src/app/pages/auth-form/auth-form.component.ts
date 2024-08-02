import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [FormsModule],
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
      (response: string) => {
        console.log("response " + JSON.stringify(response));
        this.authService.setToken(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = 'Username or password is incorrect.';
        console.error(error);
      }
    );
    }
  }
