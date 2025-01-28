import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponentApp2 } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponentApp2, config);

export default bootstrap;
