import { getKeyOfEnum } from '../enums/enumUtil';
import { WorkerType } from '../enums/worker-type';
import ColumnRowData from '../models/ColumnRowData';
import { SIMULATION } from 'src/app/constants/simulation';
import { Validators } from '@angular/forms';
import { SimulationService } from '../services/simulation.service';
import {
  ageTimeCompanyValidator,
  ageValidator,
  financedVsAmountValidator,
  monthsVsFinancedValidator,
  numericValueValidator,
  socialValidator,
} from './simulation-validators';
import { NumericOperators } from '../enums/numericOperators';
import { ErrorSimulation } from '../models/ErrorSimulation';

export const independent = (simService: SimulationService): ColumnRowData[] => {
  return [
    {
      id: SIMULATION['fSocial'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [socialValidator(simService)],
      errorMessages: {
        required: SIMULATION['nSocial'],
        [SIMULATION['fSocialErr']]:
          SIMULATION['nSocial'] + '; must have 9 digits.',
      },
    },
    {
      id: SIMULATION['fTime'],
      defaultValue: '',
      validator: [
        Validators.required,
        numericValueValidator(
          NumericOperators.greaterThan,
          12,
          SIMULATION['fTimeErr']
        ),
      ],
      errorMessages: {
        required: SIMULATION['nTime'],
        [SIMULATION['fTimeErr']]:
          SIMULATION['nTime'] + '; must be more than 12 months.',
      },
    },
    {
      id: SIMULATION['fAverage'],
      defaultValue: '',
      validator: [
        Validators.required,
        numericValueValidator(
          NumericOperators.greaterThan,
          600,
          SIMULATION['fAverageErr']
        ),
      ],
      errorMessages: {
        required: SIMULATION['nAverage'],
        [SIMULATION['fAverageErr']]:
          SIMULATION['nAverage'] + '; must be more than 600 euros.',
      },
    },
    {
      id: SIMULATION['fAnual'],
      defaultValue: '',
      validator: [
        Validators.required,
        numericValueValidator(
          NumericOperators.greaterThan,
          8400,
          SIMULATION['fAnnualErr']
        ),
      ],
      errorMessages: {
        required: SIMULATION['nAnual'],
        [SIMULATION['fAnnualErr']]:
          SIMULATION['nAnual'] + '; must be more than 8400 euros.',
      },
    },
    {
      id: SIMULATION['fLineWork'],
      defaultValue: '',
      validator: [Validators.required],
      errorMessages: { required: SIMULATION['nAnual'] },
    },
  ];
};

export const notIndependent = (
  simService: SimulationService
): ColumnRowData[] => {
  return [
    {
      id: SIMULATION['fCompany'],
      defaultValue: '',
      validator: [Validators.required, Validators.minLength(5)],
      errorMessages: {
        required: SIMULATION['nCompany'],
        minlength:
          SIMULATION['nCompany'] + '; has to have more than 4 characters.',
      },
    },
    {
      id: SIMULATION['fCSocial'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [socialValidator(simService)],
      errorMessages: {
        required: SIMULATION['nCSocial'],
        [SIMULATION['fSocialErr']]:
          SIMULATION['nCSocial'] + '; must have 9 digits.',
      },
    },
    {
      id: SIMULATION['fTimeWork'],
      defaultValue: '',
      validator: [
        Validators.required,
        numericValueValidator(
          NumericOperators.greaterThan,
          12,
          SIMULATION['fTimeWorkErr']
        ),
      ],
      errorMessages: {
        required: SIMULATION['nTimeWork'],
        [SIMULATION['fTimeWorkErr']]:
          SIMULATION['nTimeWork'] + '; must be more than 12 months.',
      },
    },
    {
      id: SIMULATION['fNet'],
      defaultValue: '',
      validator: [
        Validators.required,
        numericValueValidator(
          NumericOperators.greaterThan,
          600,
          SIMULATION['fNetErr']
        ),
      ],
      errorMessages: {
        required: SIMULATION['nNet'],
        [SIMULATION['fNetErr']]:
          SIMULATION['nNet'] + '; must be more than 600 euros.',
      },
    },
    {
      id: SIMULATION['fCLineWork'],
      defaultValue: '',
      validator: [Validators.required],
      errorMessages: {
        required: SIMULATION['nCLineWork'],
      },
    },
  ];
};

export const col2Step1: ColumnRowData[] = [
  {
    id: SIMULATION['fType'],
    defaultValue: getKeyOfEnum(WorkerType.contracted, WorkerType),
  },
  {
    id: SIMULATION['fProduct'],
    defaultValue: '',
    validator: [Validators.required],
    errorMessages: {
      required: SIMULATION['nProduct'],
    },
  },
];

export const col1Step2Independent = (
  simService: SimulationService
): ColumnRowData[] => {
  return [
    {
      id: SIMULATION['fAmount'],
      defaultValue: '',
      validator: [Validators.required],
      errorMessages: {
        required: SIMULATION['nAmount'],
      },
    },
    {
      id: SIMULATION['fFinanced'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [financedVsAmountValidator(simService)],
      errorMessages: {
        required: SIMULATION['nFinanced'],
        [SIMULATION['fFinancedErr']]:
          SIMULATION['nFinanced'] + '; must be higher than the total amount.',
      },
    },
    {
      id: SIMULATION['fMonths'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [monthsVsFinancedValidator(simService)],
      errorMessages: {
        required: SIMULATION['nMonths'],
        [SIMULATION['fMonthsErr']]:
          SIMULATION['nMonths'] +
          '; should at minimum give a value of financed per month of 80 euros.',
      },
    },
    {
      id: SIMULATION['fPersonal'],
      defaultValue: '',
      validator: [
        Validators.required,
        numericValueValidator(
          NumericOperators.greaterOrEqual,
          20000,
          SIMULATION['fPersonalErr']
        ),
      ],
      errorMessages: {
        required: SIMULATION['nPersonal'],
        [SIMULATION['fPersonalErr']]:
          SIMULATION['nPersonal'] + '; must be more than 20000 euros.',
      },
    },
    {
      id: SIMULATION['fAge'],
      defaultValue: '',
      validator: [Validators.required, ageTimeCompanyValidator()],
      asyncValidator: [ageValidator(simService)],
      errorMessages: {
        required: SIMULATION['nAge'],
        [SIMULATION['fAgeErr']]:
          SIMULATION['nAge'] + '; has to be more than 17.',
        [SIMULATION['fAgeTErr']]:
          SIMULATION['nAge'] +
          '; must be 18 or up and there should be a difference of more than 17 years from Time Working as Independent and Age.',
      },
    },
    { id: SIMULATION['fChronic'], defaultValue: [] },
  ];
};

export const col1Step2Contrated = (
  simService: SimulationService
): ColumnRowData[] => {
  return [
    {
      id: SIMULATION['fAmount'],
      defaultValue: '',
      validator: [Validators.required],
      errorMessages: {
        required: SIMULATION['nAmount'],
      },
    },
    {
      id: SIMULATION['fFinanced'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [financedVsAmountValidator(simService)],
      errorMessages: {
        required: SIMULATION['nFinanced'],
        [SIMULATION['fFinancedErr']]:
          SIMULATION['nFinanced'] + '; must be higher than the total amount.',
      },
    },
    {
      id: SIMULATION['fMonths'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [monthsVsFinancedValidator(simService)],
      errorMessages: {
        required: SIMULATION['nMonths'],
        [SIMULATION['fMonthsErr']]:
          SIMULATION['nMonths'] +
          '; should at minimum give a value of financed per month of 80 euros.',
      },
    },
    {
      id: SIMULATION['fSocial'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [socialValidator(simService)],
      errorMessages: {
        required: SIMULATION['nSocial'],
        [SIMULATION['fSocialErr']]:
          SIMULATION['nSocial'] + '; must have 9 digits.',
      },
    },
    {
      id: SIMULATION['fAge'],
      defaultValue: '',
      validator: [Validators.required, ageTimeCompanyValidator()],
      asyncValidator: [ageValidator(simService)],
      errorMessages: {
        required: SIMULATION['nAge'],
        [SIMULATION['fAgeErr']]:
          SIMULATION['nAge'] + '; has to be more than 17.',
      },
    },
    { id: SIMULATION['fChronic'], defaultValue: [] },
  ];
};

export const car = (simService: SimulationService): ColumnRowData[] => {
  return [
    {
      id: SIMULATION['fSocial'] + 0,
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [socialValidator(simService)],
      errorMessages: {
        required: SIMULATION['nSocial'],
        [SIMULATION['fSocialErr']]:
          SIMULATION['nSocial'] + '; must have 9 digits.',
      },
    },
    {
      id: SIMULATION['fAge'] + 0,
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [ageValidator(simService)],
      errorMessages: {
        required: SIMULATION['nAge'],
        [SIMULATION['fAgeErr']]:
          SIMULATION['nAge'] + '; has to be more than 17.',
      },
    },
    { id: SIMULATION['fChronic'] + 0, defaultValue: [] },
    { id: SIMULATION['fGuarantor'], defaultValue: false },
  ];
};

export const home: ColumnRowData[] = [
  {
    id: SIMULATION['fGuarantors'],
    defaultValue: '',
    isNewArray: true,
    hasDeepErrorMessages: true,
    errorMessages: {
      generic:
        "Some Guarantors don't have the Social Number or the Age filled in!",
    },
  },
];

export const genericGuarantor = (
  simService: SimulationService
): ColumnRowData[] => {
  return [
    {
      id: SIMULATION['fSocial'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [socialValidator(simService)],
      errorMessages: {
        required: SIMULATION['nSocial'],
        [SIMULATION['fSocialErr']]:
          SIMULATION['nSocial'] + '; must have 9 digits.',
      },
    },
    {
      id: SIMULATION['fAge'],
      defaultValue: '',
      validator: [Validators.required],
      asyncValidator: [ageValidator(simService)],
      errorMessages: {
        required: SIMULATION['nAge'],
        [SIMULATION['fAgeErr']]:
          SIMULATION['nAge'] + '; has to be more than 17.',
      },
    },
    { id: SIMULATION['fChronic'], defaultValue: [] },
  ];
};

const getAllData = (simService: SimulationService): ColumnRowData[] => {
  return [
    ...genericGuarantor(simService),
    ...home,
    ...car(simService),
    ...col1Step2Contrated(simService),
    ...col1Step2Independent(simService),
    ...col2Step1,
    ...notIndependent(simService),
    ...independent(simService),
  ];
};

export const getErrorMessagesByIDs = (
  simService: SimulationService,
  ids: string[],
  errors: ErrorSimulation
) => {
  return getAllData(simService)
    .filter((col: ColumnRowData) => ids.includes(col.id))
    .reduce(
      (allCol, nextCol: ColumnRowData) => ({
        ...allCol,
        [nextCol.id]: nextCol.hasDeepErrorMessages
          ? nextCol.errorMessages
          : getSimplifiedErrorMessages(
              nextCol.errorMessages,
              errors,
              nextCol.id
            ),
      }),
      {}
    );
};

const getSimplifiedErrorMessages = (
  errorMessages:
    | {
        [id: string]: string;
      }
    | undefined,
  errors: ErrorSimulation,
  id: string
) => {
  return (
    Object.keys(errorMessages || {}).reduce((allErr, nextErr) => {
      let finalResult: {
        [id: string]: string;
      } = { ...allErr };

      if (Object.keys(errors[id]).includes(nextErr)) {
        finalResult[nextErr] = errorMessages![nextErr];
      }
      return finalResult;
    }, {}) || {}
  );
};
