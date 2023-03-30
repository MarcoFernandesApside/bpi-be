import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Subscription, throwError } from 'rxjs';
import { IconType } from 'src/app/component/icons/icons.component';
import { LoginService } from 'src/app/services/login.service';
import { saveToken, saveLoginService } from '../../utils/important';

@Component({
  selector: 'app-login-bi',
  templateUrl: './login-bi.component.html',
  styleUrls: ['./login-bi.component.scss'],
})
export class LoginBiComponent {
  constructor(private loginService: LoginService, private router: Router) {
    this.loginExecute = this.loginExecute.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onPassword = this.onPassword.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  email: string = '';
  password: string = '';
  login?: Subscription;
  isModalShowing: boolean = false;
  alertIcon: IconType = IconType.Alert;

  closeModal() {
    this.isModalShowing = false;
  }

  onEmail(value: any) {
    this.email = value;
  }

  onPassword(value: any) {
    this.password = value;
  }

  loginExecute() {
    this.login = this.loginService
      .login(this.email, this.password)
      .pipe(
        catchError((err: any, caught: Observable<Object>) => {
          this.isModalShowing = true;
          return throwError(() => err.message);
        })
      )
      .subscribe((data: any) => {
        if (data.token) {
          saveToken('internal-login', data.token);
          saveLoginService('login', 'internal');
          this.router.navigateByUrl('/bi/main');
        }
      });
  }

  ngOnDestroy() {
    this.login?.unsubscribe();
  }
}
