import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { IconType } from '../icons/icons.component';

@Component({
  selector: 'app-guarantors-container',
  templateUrl: './guarantors-container.component.html',
  styleUrls: ['./guarantors-container.component.scss'],
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
export class GuarantorsContainerComponent {
  SIMULATION: { [id: string]: string } = sim;
  plusIcon: IconType = IconType.None;

  ngOnInit() {
    this.addNewGuarantor(); //to remove
  }

  @Input()
  addNewGuarantor: () => void = () => {};

  @Input()
  removeGuarantor: (indentifier: any) => void = () => {};

  @Input()
  getGuarantorsControls: () => any[] = () => [];

  neverDisabled: () => boolean = () => false;
}
