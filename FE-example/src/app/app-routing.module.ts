import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainKcComponent } from './body/main-kc/main-kc.component';
import { SelectLoginComponent } from './body/select-login/select-login.component';
import { RouteGuardGuard } from './auth/route-guard.guard';
import { MainMenuComponent } from './body/mainMenu/main-menu/main-menu.component';
import { LoginKcComponent } from './body/login-kc/login-kc.component';
import { LoginBiComponent } from './body/login-bi/login-bi.component';
//import { SimulationComponent } from './body/simulation/simulation.component';
import { SimulationV2Component } from './body/simulation-v2/simulation-v2.component';
import { DebugComponent } from './body/debug/debug.component';

const childPaths: Routes = [
  {
    path: 'main',
    component: MainMenuComponent,
    canActivate: [RouteGuardGuard],
  },
  {
    path: 'main/simulation/:step',
    //component: SimulationComponent,
    component: SimulationV2Component,
    canActivate: [RouteGuardGuard],
  },
];

const routes: Routes = [
  {
    path: 'kc',
    component: MainKcComponent,
    children: [
      ...childPaths,
      {
        path: '',
        component: LoginKcComponent,
      },
    ],
  },
  {
    path: 'bi',
    component: MainKcComponent,
    children: [
      ...childPaths,
      {
        path: '',
        component: LoginBiComponent,
      },
    ],
  },
  { path: '', component: SelectLoginComponent },
  { path: 'debug', component: DebugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
