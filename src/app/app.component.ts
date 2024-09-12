import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cms-frontend';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.loadUser();
    this.authService.user$.subscribe((user) => {
      if (!user) {
        this.router.navigate(['login'], { replaceUrl: true });
      }
    });
  }
}
