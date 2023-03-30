import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';
import { initializer } from './utils/app-init';
import { SelectLoginComponent } from './body/select-login/select-login.component';
import { MainKcComponent } from './body/main-kc/main-kc.component';
import { MainMenuComponent } from './body/mainMenu/main-menu/main-menu.component';
import { LoginKcComponent } from './body/login-kc/login-kc.component';
import { LoginBiComponent } from './body/login-bi/login-bi.component';
import { SelectControllerComponent } from './component/select-controller/select-controller.component';
import { BeginGenericScreenComponent } from './component/begin-generic-screen/begin-generic-screen.component';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { NgOptimizedImage } from '@angular/common';
import { InputControllerComponent } from './component/input-controller/input-controller.component';
import { MainCardComponent } from './component/main-card/main-card.component';
import { IconsComponent } from './component/icons/icons.component';
import { SimulationComponent } from './body/simulation/simulation.component';
import { MainGenericScreenComponent } from './component/main-generic-screen/main-generic-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterptConfigInputComponent } from './component/interpt-config-input/interpt-config-input.component';
import { SimulationV2Component } from './body/simulation-v2/simulation-v2.component';
import { SimulationStep1C1Component } from './body/simulation-step1-c1/simulation-step1-c1.component';
import { SimulationStep1C2Component } from './body/simulation-step1-c2/simulation-step1-c2.component';
import { SimulationStep2C1Component } from './body/simulation-step2-c1/simulation-step2-c1.component';
import { SimulationStep2C2Component } from './body/simulation-step2-c2/simulation-step2-c2.component';
import { GuarantorInputCardComponent } from './component/guarantor-input-card/guarantor-input-card.component';
import { CheckboxControllerComponent } from './component/checkbox-controller/checkbox-controller.component';
import { GuarantorsContainerComponent } from './component/guarantors-container/guarantors-container.component';
import { DebugComponent } from './body/debug/debug.component';
import { ModalComponent } from './component/modal/modal.component';
import { FormErrorsSimulationComponent } from './component/form-errors-simulation/form-errors-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectLoginComponent,
    MainKcComponent,
    MainMenuComponent,
    LoginKcComponent,
    LoginBiComponent,
    SelectControllerComponent,
    BeginGenericScreenComponent,
    InputControllerComponent,
    MainCardComponent,
    IconsComponent,
    SimulationComponent,
    MainGenericScreenComponent,
    InterptConfigInputComponent,
    SimulationV2Component,
    SimulationStep1C1Component,
    SimulationStep1C2Component,
    SimulationStep2C1Component,
    SimulationStep2C2Component,
    GuarantorInputCardComponent,
    CheckboxControllerComponent,
    GuarantorsContainerComponent,
    DebugComponent,
    ModalComponent,
    FormErrorsSimulationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    NgOptimizedImage,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
