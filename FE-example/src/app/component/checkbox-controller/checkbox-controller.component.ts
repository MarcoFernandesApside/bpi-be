import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-checkbox-controller',
  templateUrl: './checkbox-controller.component.html',
  styleUrls: ['./checkbox-controller.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class CheckboxControllerComponent {
  @Input()
  name: string = '';

  @Input()
  inFormGroupName: string | null = null;
}
