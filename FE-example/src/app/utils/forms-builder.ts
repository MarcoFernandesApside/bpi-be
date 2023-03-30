import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ErrorSimulation } from '../models/ErrorSimulation';
import { IConfigData } from './forms-config';

export const interptConfigData = (
  data: { [id: string]: IConfigData },
  form: FormGroup<any> | null
) => {
  const elements: IConfigData[] = Object.values(data);
  const ids: string[] = Object.keys(data);

  Object.keys(form?.value).forEach((control) => {
    form?.removeControl(control, {});
  });

  for (let element of elements) {
    const index: number = elements.indexOf(element);
    const id: string = ids[index];

    if (element.expectedState === 'any') {
      const control: FormControl = element.validator
        ? new FormControl(
            element.defaultValue,
            element.validator as AsyncValidatorFn | AsyncValidatorFn[]
          )
        : new FormControl(element.defaultValue);

      form?.addControl(id, control);
    }

    element.id = id;
  }

  return elements;
};

export const getHasExpectedState = (
  data: { [id: string]: IConfigData },
  element: IConfigData,
  form: FormGroup<any> | null
): boolean => {
  const parent = element.parentEnabler;

  const histObj: any = element.historicObject;
  let histResult: any = null;

  if (histObj) {
    histResult = getFormFromHistoric(histObj as string);
  }

  const result: boolean = !!(
    (element.expectedState === 'any' && !histResult) ||
    ((element.expectedState === 'any' ||
      (!!data[parent] &&
        form?.contains(parent) &&
        form.get(parent)?.value === element.expectedState)) &&
      (!histResult ||
        (!!histResult[element.historicEnabler as string] &&
          histResult[element.historicEnabler as string] ===
            element.historicNeededState)))
  );

  if (result) {
    const control: FormControl = element.validator
      ? new FormControl(
          element.defaultValue,
          element.validator as AsyncValidatorFn | AsyncValidatorFn[]
        )
      : new FormControl(element.defaultValue);

    form?.addControl(element.id as string, control);
  } else {
    form?.removeControl(element.id as string, {});
  }
  return result;
};

export const getFormFromHistoric = (id: string): any => {
  const tentativeOBJ: string | null = localStorage.getItem(`hist-${id}`);

  return tentativeOBJ ? JSON.parse(tentativeOBJ) : null;
};

export const saveHistoricForm = (id: string, formResult: any) => {
  localStorage.setItem(`hist-${id}`, JSON.stringify(formResult));
};

export const removeHistoric = (id: string): any => {
  localStorage.removeItem(`hist-${id}`);
};

export const getColumns = (elements: IConfigData[]) => {
  return {
    column1: elements.filter((element) => element.isLeftSide),
    column2: elements.filter((element) => !element.isLeftSide),
  };
};

export const validateAllFormFields = (formGroup: FormGroup) => {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);

    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    } else if (control instanceof FormArray) {
      validateFormArrayFields(control);
    }
  });
};

export const validateFormArrayFields = (formArray: FormArray) => {
  for (let control of formArray.controls) {
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    } else if (control instanceof FormArray) {
      validateFormArrayFields(control);
    }
  }
};

export const getFormValidationErrors = (formGroup: FormGroup) => {
  let allErrors: ErrorSimulation = {};
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    let result: null | ErrorSimulation = null;

    if (control instanceof FormControl && !!control.errors) {
      result = control.errors;
    } else if (control instanceof FormGroup) {
      console.log('group: ', field);
      result = getFormValidationErrors(control);
    } else if (control instanceof FormArray) {
      result = getFormArrayValidationErrors(control);
    }

    if (result && Object.keys(result).length > 0) {
      allErrors[field] = result;
    }
  });

  return allErrors;
};

export const getFormArrayValidationErrors = (formArray: FormArray) => {
  let allErrors: ErrorSimulation = {};
  for (let [index, control] of formArray.controls.entries()) {
    let result: null | ErrorSimulation = null;
    if (control instanceof FormControl && !!control.errors) {
      result = control.errors;
    } else if (control instanceof FormGroup) {
      result = getFormValidationErrors(control);
    } else if (control instanceof FormArray) {
      result = getFormArrayValidationErrors(control);
    }

    if (result && Object.keys(result).length > 0) {
      allErrors[index] = result;
    }
  }

  return allErrors;
};
