import { Routes } from '@angular/router';
import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './components/home/home.component';
import { loadRemote } from '@module-federation/enhanced/runtime';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './routes'
      })
      .then(m => m.routes)
  },
  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './routes'
      })
      .then(m => m.routes)
  },
];
