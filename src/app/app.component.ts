import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonModule,
  NotificationDisplayService,
  NotificationService,
} from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, ButtonModule],
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  showToastNotification() {
    this.notificationService.showToast({
      showClose: true,
      duration: 8000,
      type: 'error',
      title: 'Error',
      caption: 'You are toasted!',
      target: '.notification-container',
    });
  }
}
