import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponentApp2 } from './app/app.component';

bootstrapApplication(AppComponentApp2, appConfig)
  .catch((err) => console.error(err));
