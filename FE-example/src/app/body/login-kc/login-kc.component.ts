import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login-kc',
  templateUrl: './login-kc.component.html',
  styleUrls: ['./login-kc.component.scss'],
})
export class LoginKcComponent {
  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) {}

  ngOnInit() {
    this.atemptToMainNavigate();
  }

  async atemptToMainNavigate() {
    const isLogged: boolean =
      !!this.keycloakService.getKeycloakInstance().authenticated;

    if (isLogged) {
      this.router.navigateByUrl('/kc/main');
    } else {
      this.keycloakService.login().then(() => {
        this.atemptToMainNavigate();
      });
    }
  }
}
