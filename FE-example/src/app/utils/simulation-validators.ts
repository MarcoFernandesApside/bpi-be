import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { SimulationService } from '../services/simulation.service';
import { SIMULATION } from 'src/app/constants/simulation';
import { MathOper, NumericOperators } from '../enums/numericOperators';
import { getFormFromHistoric } from './forms-builder';

export const socialValidator = (
  simService: SimulationService
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return simService.validateSocialNumber(control.value).pipe(
      map((val: any) => {
        console.log(val, ' -> social');
        return !val.isValid ? { socialDigits: true } : null;
      })
    );
  };
};

export const ageValidator = (
  simService: SimulationService
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return simService.validateAge(control.value).pipe(
      map((val: any) => {
        console.log(val, ' -> age');
        return !val.isValid ? { age: true } : null;
      })
    );
  };
};

export const financedVsAmountValidator = (
  simService: SimulationService
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return simService
      .financedVsAmountAge(
        control.value,
        control.parent?.get(SIMULATION['fAmount'])?.value
      )
      .pipe(
        map((val: any) => {
          console.log(
            control.parent?.get(SIMULATION['fAmount'])?.value,
            control.value,
            ' -> financed',
            val
          );
          return !val.isValid ? { financedHigher: true } : null;
        })
      );
  };
};
export const monthsVsFinancedValidator = (
  simService: SimulationService
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return simService
      .monthsVsFinanced(
        control.parent?.get(SIMULATION['fFinanced'])?.value,
        control.value
      )
      .pipe(
        map((val: any) => {
          console.log(
            control.parent?.get(SIMULATION['fFinanced'])?.value,
            control.value,
            ' -> months',
            val
          );
          return !val.isValid ? { monthsNotValue: true } : null;
        })
      );
  };
};

export const numericValueValidator = (
  operator: NumericOperators,
  compare: number,
  errorId: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const val = +control.value;
    return val && MathOper(operator, val, compare) ? null : { [errorId]: true };
  };
};

export const ageTimeCompanyValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const data: any = getFormFromHistoric(`sim2-step-1`);
    if (!data || !+data.timework) {
      return null;
    }
    const ageInMonths = +control.value ? +control.value * 12 : 0;
    const diferenceInMonths = ageInMonths - +data.timework;
    const expectedDiference = 17 * 12;

    return ageInMonths > +data.timework &&
      diferenceInMonths >= expectedDiference
      ? null
      : { ageTime: true };
  };
};

export const genericValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value);
    console.log(control.parent);
    return {};
  };
};
