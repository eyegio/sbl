import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/areas/detail/detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ambito/:name',
    component: DetailComponent
  },
  {
    path: 'private-dashboard',
    component: DashboardComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
