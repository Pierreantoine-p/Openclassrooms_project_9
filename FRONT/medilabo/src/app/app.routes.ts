import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '', loadComponent :() =>  import('./pages/home/home.component').then(module => module.HomeComponent)
  },
  {
    path : 'addPatient', loadComponent :() =>  import('./pages/patient-form-add/patient-form-add.component').then(module => module.PatientFormAddComponent)
  },
  {
    path : 'updatePatient', loadComponent :() =>  import('./pages/form-update-patient/form-update-patient.component').then(module => module.FormUpdatePatientComponent)
  },
  {
    path : 'addNote', loadComponent :() =>  import('./pages/note-patient-add/note-patient-add.component').then(module => module.NotePatientAddComponent)
  },
  {
    path : 'patient-details', loadComponent :() =>  import('./pages/patient-details/patient-details.component').then(module => module.PatientDetailsComponent)
  },
  {
    path : '**', loadComponent :() =>  import('./pages/page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
  }

];
