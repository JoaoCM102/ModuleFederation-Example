import { Routes } from '@angular/router';
import { HomeComponentApp2 } from './components/home/home.component';

export const routes: Routes = [

  { path: '', redirectTo: 'homeApp2', pathMatch: 'full' },
  { path: 'homeApp2', component: HomeComponentApp2 },
];
