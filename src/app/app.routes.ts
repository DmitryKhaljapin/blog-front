import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { Login } from './auth/components/login/login';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: Login },
];
