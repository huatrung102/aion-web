import {ViewContainerRef, DynamicComponentLoader, Attribute, Directive} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router-deprecated';
import {UserService} from '../services/user.service';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes = [
    '', 'index', 'players', 'abyss', 'legions', 'login', 'signup'
  ];
  private parentRouter: Router;

  constructor(_containerRef: ViewContainerRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute('name') nameAttr: string, private _userService: UserService) {

    super(_containerRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;

  }

  activate(instruction) {
    if (this._canActivate(instruction.urlPath)) {
      return super.activate(instruction);
    }

    this.parentRouter.navigate(['Login']);
  }

  _canActivate(url) {
    return this.publicRoutes.indexOf(url) !== -1 || this._userService.isLoggedIn();
  }
}
