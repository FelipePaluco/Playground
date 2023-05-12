import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  NotificationService,
  NotificationDisplayService,
} from 'carbon-components-angular';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    NotificationService,
    NotificationDisplayService,
  ],
}).catch((err) => console.error(err));
