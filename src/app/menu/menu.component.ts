import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './../services/user/user.service';
import {CONFIG} from './../app.config';

@Component({
  selector: 'top-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  public isCollapsed:boolean = true;

  constructor(private userService:UserService, private router:Router) {
  }

  title = CONFIG.title;

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
    return false;
  }

  getUserName() {
    return this.userService.getUsername();
  }

  isAdmin() {
    return this.userService.getLoggedIn() && this.userService.getUsername() == 'admin';
  }

}
