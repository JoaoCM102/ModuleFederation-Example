import { Routes } from '@angular/router';
import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './components/home/home.component';
import { loadRemote } from '@module-federation/enhanced/runtime';

const currentPort = parseInt(window.location.port, 10);
const app1 = (currentPort + 1).toString()
const app2 = (currentPort + 2).toString()
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `http://localhost:${app1}/remoteEntry.js`,
        exposedModule: './routes'
      })
      .then(m => m.routes)
  },
  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `http://localhost:${app2}/remoteEntry.js`,
        exposedModule: './routes'
      })
      .then(m => m.routes)
  },
];
