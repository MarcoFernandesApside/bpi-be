import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-begin-generic-screen',
  templateUrl: './begin-generic-screen.component.html',
  styleUrls: ['./begin-generic-screen.component.scss'],
})
export class BeginGenericScreenComponent {
  @Input()
  isActive: boolean = true;

  @Input()
  btnName: string = '';

  @Input()
  onClick: ((event: any) => void) | undefined;
}
