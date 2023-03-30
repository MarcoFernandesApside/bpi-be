import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export default interface ColumnRowData {
  id: string;
  defaultValue: any;
  values?: any[];
  validator?: ValidatorFn[] | null;
  asyncValidator?: AsyncValidatorFn[] | null;
  isNewArray?: boolean;
  errorMessages?: { [id: string]: string };
  hasDeepErrorMessages?: boolean;
}
