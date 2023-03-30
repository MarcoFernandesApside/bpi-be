import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  @Input()
  icon: IconType = IconType.None;
}

export enum IconType {
  None = '',
  Simulations = 'simulations',
  Settings = 'settings',
  Credits = 'credits',
  Investors = 'investors',
  CAS = 'client-account-savings',
  Properties = 'properties',
  IAM = 'internal-account-managment',
  Products = 'products',
  Next = 'next',
  Dash = 'dash',
  Results = 'results',
  Alert = 'alert',
  Profile = 'profile',
  Add = 'add',
  Logout = 'logout',
}
