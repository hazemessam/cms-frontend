import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { AppNotification } from '../../models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  notification: AppNotification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe({ 
      next: (v) => { this.notification = v; }
    });
  }
}
