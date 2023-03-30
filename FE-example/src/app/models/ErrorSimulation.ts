import { ValidationErrors } from '@angular/forms';

export interface ErrorSimulation {
  [id: string]: ValidationErrors | ErrorSimulation;
}
