import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '', loadComponent :() =>  import('./pages/home/home.component').then(module => module.HomeComponent)
  },
  {
    path : 'user', loadChildren :() =>  import('./component/user/user.routes').then(module => module.userRoutes)
  },
  {
    path : 'patient-details', loadComponent :() =>  import('./pages/patient-details/patient-details.component').then(module => module.PatientDetailsComponent)
  },
  {
    path : '**', loadComponent :() =>  import('./pages/page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
  }

];
