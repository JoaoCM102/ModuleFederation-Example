import { Routes } from '@angular/router';
import { HomeComponentApp1 } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homeApp1', pathMatch: 'full' },
  { path: 'homeApp1', component: HomeComponentApp1 },
];
