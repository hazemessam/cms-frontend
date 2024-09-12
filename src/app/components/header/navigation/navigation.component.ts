import { Component } from '@angular/core';
import { Role, User } from '../../../models/auth.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  user: User | null = null;
  readonly Role = Role;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
