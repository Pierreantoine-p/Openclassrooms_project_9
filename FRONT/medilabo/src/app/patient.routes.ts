
import { Routes } from "@angular/router";
import { UserService } from "./service/user.service";


export default [{
  path : 'patient-details',
  providers : [UserService],
  children : [
    {
      path: 'detail-patient', loadComponent: () => import('./component/user/detail-patient/detail-patient.component').then(module => module.DetailPatientComponent)
    },
    {
      path: 'notes-patient', loadComponent: () => import('./component/user/notes-patient/notes-patient.component').then(module => module.NotesPatientComponent)
    },
    {
      path: 'status-patient', loadComponent: () => import('./component/user/status-patient/status-patient.component').then(module => module.StatusPatientComponent)
    }
  ]
}] as Routes ;
