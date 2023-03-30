import { AsyncValidatorFn } from '@angular/forms';
import { enumAsObj, getKeyOfEnum } from '../enums/enumUtil';
import { WorkerType } from '../enums/worker-type';

export interface IConfigData {
  id?: string;
  name: string;
  inputType: InputTypes;
  parentEnabler: string;
  expectedState: any;
  historicObject?: string;
  historicEnabler?: string;
  historicNeededState?: any;
  defaultValue: any;
  values: any;
  isLeftSide: boolean;
  validator: AsyncValidatorFn | AsyncValidatorFn[] | null;
}

export enum InputTypes {
  none,
  textInput,
  select,
}

export const SimulationStep1 = (): { [id: string]: IConfigData } => {
  return {
    social: {
      name: 'Social Number',
      inputType: InputTypes.textInput,
      parentEnabler: 'type',
      expectedState: getKeyOfEnum(WorkerType.independent, WorkerType),
      defaultValue: '',
      values: '',
      isLeftSide: true,
      validator: null,
    },
    type: {
      name: 'Type of Job',
      inputType: InputTypes.select,
      parentEnabler: '',
      expectedState: 'any',
      defaultValue: '',
      values: enumAsObj(WorkerType),
      isLeftSide: false,
      validator: null,
    },
  };
};

export const SimulationStep2 = (): { [id: string]: IConfigData } => {
  return {
    amount: {
      name: 'Amount',
      inputType: InputTypes.textInput,
      parentEnabler: '',
      expectedState: 'any',
      defaultValue: '',
      values: '',
      isLeftSide: true,
      validator: null,
    },
    socialContrated: {
      name: 'Social Number',
      inputType: InputTypes.textInput,
      parentEnabler: '',
      expectedState: 'any',
      historicObject: 'sim-step-1',
      historicEnabler: 'type',
      historicNeededState: getKeyOfEnum(WorkerType.contracted, WorkerType),
      defaultValue: '',
      values: '',
      isLeftSide: true,
      validator: null,
    },
  };
};
