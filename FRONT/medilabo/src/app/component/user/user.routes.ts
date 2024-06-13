import { Routes } from "@angular/router";

export const userRoutes : Routes = [
  {
    path : '', loadComponent :() =>  import('../../pages/patient-form/patient-form.component').then(module => module.PatientFormComponent)
  },
]
