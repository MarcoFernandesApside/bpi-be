import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { IconType } from '../icons/icons.component';

@Component({
  selector: 'app-guarantor-input-card',
  templateUrl: './guarantor-input-card.component.html',
  styleUrls: ['./guarantor-input-card.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class GuarantorInputCardComponent {
  SIMULATION: { [id: string]: string } = sim;

  dashIcon: IconType = IconType.Dash;

  @Input()
  index: number = 0;

  @Input()
  contentPosition: string = 'none'; // none, up, down, inner

  @Input()
  removeGuarantor: (indentifier: any) => void = () => {};

  @Input()
  isDisabled: () => boolean = () => false;

  @Input()
  canBeRemoved: boolean = false;

  ngOnInit() {
    if (
      this.contentPosition !== 'none' &&
      this.contentPosition !== 'up' &&
      this.contentPosition !== 'inner' &&
      this.contentPosition !== 'down'
    ) {
      this.contentPosition = 'none';
    }
  }
}
