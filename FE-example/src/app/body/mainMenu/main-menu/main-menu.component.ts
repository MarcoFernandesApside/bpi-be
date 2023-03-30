import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Subscription } from 'rxjs';
import { IconType } from 'src/app/component/icons/icons.component';
import { LoginService } from 'src/app/services/login.service';
import { getLoginService, getToken } from 'src/app/utils/important';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
    private loginService: LoginService
  ) {}

  currentAccessLevel: AccessLevels = AccessLevels.Admin;

  possibleCallbacks: any = {
    basic: () => {},
    [IconType.Simulations]: () => {
      this.router.navigateByUrl(this.router.url + '/simulation/1');
    },
  };

  buttonsConfig: AccessDefenition[] = [];
  user?: Subscription;

  ngOnInit() {
    this.setupCallbacks();
    this.verifyRolesForMenu();
  }

  setupCallbacks() {
    Object.keys(this.possibleCallbacks).forEach((callback: any) => {
      this.possibleCallbacks[callback] =
        this.possibleCallbacks[callback].bind(this);
    });

    this.buttonsConfig = [
      {
        name: 'Simulations',
        icon: IconType.Simulations,
        access: [
          AccessLevels.Admin,
          AccessLevels.Sales,
          AccessLevels.Oper,
          AccessLevels.Train,
        ],
        callback: this.possibleCallbacks[IconType.Simulations],
      },
      {
        name: 'Credits',
        icon: IconType.Credits,
        access: [AccessLevels.Admin, AccessLevels.Sales, AccessLevels.Oper],
        callback: this.possibleCallbacks.basic,
      },
      {
        name: 'Investors',
        icon: IconType.Investors,
        access: [AccessLevels.Admin],
        callback: this.possibleCallbacks.basic,
      },
      {
        name: 'C.A.S.',
        icon: IconType.CAS,
        access: [AccessLevels.Admin, AccessLevels.Oper, AccessLevels.Train],
        callback: this.possibleCallbacks.basic,
      },
      {
        name: 'Properties',
        icon: IconType.Properties,
        access: [AccessLevels.Admin, AccessLevels.Oper],
        callback: this.possibleCallbacks.basic,
      },
      {
        name: 'I.A.M.',
        icon: IconType.IAM,
        access: [AccessLevels.Admin],
        callback: this.possibleCallbacks.basic,
      },
      {
        name: 'Products',
        icon: IconType.Products,
        access: [AccessLevels.Sales],
        callback: this.possibleCallbacks.basic,
      },
    ];
  }

  verifyRolesForMenu() {
    if (getLoginService('login') === 'internal' && getToken('internal-login')) {
      this.user = this.loginService
        .user(getToken('internal-login'))
        .subscribe((data: any) => {
          if (data.role) {
            this.currentAccessLevel = data.role;
          }
        });
    } else {
      const roles: string[] = this.keycloakService.getUserRoles();
      const accesss = Object.values(AccessLevels);
      for (const access of accesss) {
        if (roles.includes(access)) {
          this.currentAccessLevel = access;
          break;
        }
      }
    }
  }

  getConfigByAccessLevel(): AccessDefenition[] {
    return this.buttonsConfig.filter((config) =>
      config.access.includes(this.currentAccessLevel)
    );
  }

  logout(event: any) {
    this.keycloakService.logout();
  }

  ngOnDestroy() {
    this.user?.unsubscribe();
  }
}

export enum AccessLevels {
  Admin = 'Admin',
  Sales = 'Salesman',
  Oper = 'Operator',
  Train = 'Trainee',
}

export interface AccessDefenition {
  name: string;
  icon: IconType;
  access: AccessLevels[];
  callback: Function;
}
