import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppNotification } from "../models/notification.model";

@Injectable({ providedIn: 'root' })
export class NotificationService {
    notification$ = new BehaviorSubject<AppNotification | null>(null);

    show(notification: AppNotification) {
        this.notification$.next(notification);
        setTimeout(() => this.notification$.next(null), 5000)
    }
}