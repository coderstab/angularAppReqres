import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocApp';
  user: User;
  users: User[];

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    this.authenticationService.user.subscribe((x) => {
      this.user = x;
      if (this.isAdmin) {
        this.getUsers();
      }
    });
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Moderator;
  }

  logout() {
    this.authenticationService.logout();
  }

  getUsers() {
    this.authenticationService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
