import { Component, Input } from '@angular/core';
import { IconType } from '../icons/icons.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input()
  icon: IconType = IconType.None;

  @Input()
  buttons: { icon: IconType; text: string; click: () => void }[] = [
    { icon: IconType.None, text: 'Ok', click: () => this.closeModal() },
  ];

  @Input()
  isVisible: boolean = false;

  @Input()
  closeModal: () => void = () => (this.isVisible = false);
}
