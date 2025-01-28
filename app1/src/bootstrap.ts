import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponentApp1 } from './app/app.component';

bootstrapApplication(AppComponentApp1, appConfig)
  .catch((err) => console.error(err));
