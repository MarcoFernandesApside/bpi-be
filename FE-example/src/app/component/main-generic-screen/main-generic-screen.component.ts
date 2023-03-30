import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { LoginService } from 'src/app/services/login.service';
import {
  getLoginService,
  getToken,
  removeToken,
  removeLoginService,
} from 'src/app/utils/important';
import { IconType } from '../icons/icons.component';

@Component({
  selector: 'app-main-generic-screen',
  templateUrl: './main-generic-screen.component.html',
  styleUrls: ['./main-generic-screen.component.scss'],
})
export class MainGenericScreenComponent {
  constructor(
    private keycloakService: KeycloakService,
    private loginService: LoginService,
    private router: Router
  ) {}

  settingsIcon: IconType = IconType.Settings;
  isSettingsShowing: boolean = false;
  settingsOptions: SettingsOption[] = [
    {
      icon: IconType.Profile,
      label: 'My profile',
      click: () => {},
    },
    {
      icon: IconType.Add,
      label: 'Add a product',
      click: () => {},
    },
    {
      icon: IconType.Logout,
      label: 'Logout',
      click: () => {
        if (
          getLoginService('login') === 'internal' &&
          getToken('internal-login')
        ) {
          this.loginService.logout(getToken('internal-login'));
          this.router.navigateByUrl('/');
          removeLoginService('login');
          removeToken('internal-login');
        } else {
          this.keycloakService.logout();
        }
      },
    },
  ];

  toggleShowingSettings() {
    this.isSettingsShowing = !this.isSettingsShowing;
  }
}

export interface SettingsOption {
  icon: IconType;
  label: string;
  click: () => void;
}
