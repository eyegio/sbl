import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { DetailComponent } from './components/areas/detail/detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: FormComponent
  },
  {
    path: 'ambito/:name',
    component: DetailComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
