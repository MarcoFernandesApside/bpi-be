import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-login',
  templateUrl: './select-login.component.html',
  styleUrls: ['./select-login.component.scss'],
})
export class SelectLoginComponent {
  constructor(private router: Router) {
    this.loginChanged = this.loginChanged.bind(this);
    this.loginGo = this.loginGo.bind(this);
  }

  loginTypes: string[] = ['Key Cloak', 'Internal'];
  loginRoutes: { [id: string]: string } = {
    [this.loginTypes[0]]: '/kc',
    [this.loginTypes[1]]: '/bi',
  };
  selectedRoute: string = '';
  isActive: boolean = false;

  getTypesAsObj(): any {
    let obj: any = {};

    this.loginTypes.forEach((type) => (obj[type] = type));
    return obj;
  }

  loginChanged(event: any) {
    if (event.value) {
      this.isActive = true;
      this.selectedRoute = this.loginRoutes[event.value];
    }
  }

  loginGo(event: any) {
    if (this.selectedRoute) {
      this.router.navigateByUrl(this.selectedRoute);
    }
  }
}
