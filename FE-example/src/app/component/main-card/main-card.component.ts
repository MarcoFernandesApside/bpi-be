import { Component, Input } from '@angular/core';
import { IconType } from '../icons/icons.component';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent {
  @Input()
  icon: IconType = IconType.None;

  @Input()
  name: string = '';
}
