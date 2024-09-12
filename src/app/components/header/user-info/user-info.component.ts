import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => (this.user = user));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login'], { replaceUrl: true });
  }
}
