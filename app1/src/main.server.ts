import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponentApp1 } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponentApp1, config);

export default bootstrap;
