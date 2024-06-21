import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { StatusService } from '../../../service/status.service';

@Component({
  selector: 'app-status-patient',
  standalone: true,
  imports: [],
  templateUrl: './status-patient.component.html',
  styleUrl: './status-patient.component.scss'
})
export class StatusPatientComponent implements OnInit{

  status: string = 'NONE';
  firstName: string = '';
  lastName: string = '';
  errorMessage: string = '';


  constructor(private userService: UserService, private statusService: StatusService) {}

  ngOnInit(): void {
    this.firstName = this.userService.getUser()?.firstName ?? '';
    this.lastName = this.userService.getUser()?.lastName ?? '';

    if (this.firstName && this.lastName) {
       this.statusService.getStatus(this.firstName, this.lastName).subscribe(
        (response : string) => {
          this.status = response
        },
        (error) => {
          this.errorMessage = 'User not found';
          console.error(error);
        }

      )
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'NONE':
        return 'green';
      case 'BORDERLINE':
        return 'yellow';
      case 'INDANGER':
        return 'orange';
      case 'EARLYONSET':
        return 'red';
      default:
        return 'green';
    }
  }
}
