import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getHasExpectedState } from 'src/app/utils/forms-builder';
import { IConfigData, InputTypes } from 'src/app/utils/forms-config';

@Component({
  selector: 'app-interpt-config-input',
  templateUrl: './interpt-config-input.component.html',
  styleUrls: ['./interpt-config-input.component.scss'],
})
export class InterptConfigInputComponent {
  @Input()
  elements: IConfigData[] = [];
  @Input()
  data: {
    [id: string]: IConfigData;
  } = {};
  @Input()
  form: FormGroup<any> | null = null;

  inputTypes: typeof InputTypes = InputTypes;

  ngOnInit() {}

  hasExpectedState(element: IConfigData) {
    return getHasExpectedState(this.data, element, this.form);
  }

  idAsStr(id: string | undefined): string {
    return id as string;
  }
}
