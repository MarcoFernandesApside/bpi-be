import { Component, Input } from '@angular/core';
import { ErrorSimulation } from 'src/app/models/ErrorSimulation';
import { SimulationService } from 'src/app/services/simulation.service';
import { getErrorMessagesByIDs } from 'src/app/utils/simulation-columns';

@Component({
  selector: 'app-form-errors-simulation',
  templateUrl: './form-errors-simulation.component.html',
  styleUrls: ['./form-errors-simulation.component.scss'],
})
export class FormErrorsSimulationComponent {
  constructor(private simService: SimulationService) {}

  @Input()
  data: ErrorSimulation = {};

  initialRequired: string = 'Fields:\n';
  requiredErrors: string = this.initialRequired;
  otherErrors: { bold: string; normal: string }[] = [];

  ngOnChanges() {
    const ids: string[] = Object.keys(this.data);
    const errorMessages: { [id: string]: string } = getErrorMessagesByIDs(
      this.simService,
      ids,
      this.data
    );

    this.requiredErrors = this.initialRequired;
    this.otherErrors = [];

    for (const error in errorMessages) {
      for (const message in errorMessages[error] as any) {
        const globalMessages = errorMessages[error];

        if (message === 'required') {
          this.requiredErrors += `${globalMessages[message as any]}, `;
        } else {
          const values: string[] = globalMessages[message as any].split(';');

          if (values.length > 1) {
            this.otherErrors.push({ bold: values[0], normal: values[1] });
          } else {
            this.otherErrors.push({ bold: '', normal: values[0] });
          }
        }
      }
    }

    if (this.requiredErrors === this.initialRequired) {
      this.requiredErrors = '';
    } else {
      this.requiredErrors =
        this.requiredErrors.substring(0, this.requiredErrors.length - 2) + '.';
    }
  }
}
