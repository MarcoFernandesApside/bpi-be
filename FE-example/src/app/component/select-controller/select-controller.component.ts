import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select-controller',
  templateUrl: './select-controller.component.html',
  styleUrls: ['./select-controller.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
  host: {
    style: 'display: contents',
  },
})
export class SelectControllerComponent {
  constructor() {}

  @Input()
  isEnabled: boolean | null = null;

  @Input()
  public inSelectionChanged: ((event: any) => void) | undefined;

  @Input()
  public fields: { [id: string]: string } = {};

  @Input()
  isReactive: boolean = false;

  @Input()
  inFormGroupName: string = '';

  @Input()
  name: string = '';

  keys: string[] = [];

  ngOnInit() {
    this.keys = Object.keys(this.fields);
  }

  selectionChanged(event: any) {
    this.inSelectionChanged?.(event);
  }

  getIsEnabled(): boolean {
    return this.isEnabled === null || !!this.isEnabled;
  }
}
