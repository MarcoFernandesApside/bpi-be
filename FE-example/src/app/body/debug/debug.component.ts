import { Component } from '@angular/core';
import { IconType } from 'src/app/component/icons/icons.component';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
})
export class DebugComponent {
  constructor() {}

  icon = IconType.Alert;

  ngOnInit() {}
}
