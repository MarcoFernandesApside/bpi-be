import { Prisma } from '@prisma/client';
import { ProductType } from 'src/enums/ProductType';
import { WorkerType } from 'src/enums/WorkerType';

export interface Step1Contracted {
  clinework: string;
  company: string;
  csocial: number;
  net: number;
  product: ProductType;
  timework: number;
  type: WorkerType;
}

export interface Step1Independent {
  type: WorkerType;
  product: ProductType;
  social: number;
  itime: number;
  iaverage: number;
  iannual: number;
  linework: string;
}

export interface Step2 {
  simulationID: string | number;
  age: number;
  amount: number;
  financed: number;
  chronic: string[];
  guarantors: any[];
  months: number;
  social: number;
  personal: number;
  bguarantor: boolean;
}

export interface GuarantorInput {
  [id: number]: {
    baseInfo: Prisma.BaseInfoSimCreateInput;
    chronic: Prisma.ChronicDiseaseCreateInput[];
  };
}

export interface FinancedVsAmount {
  financed: number;
  amount: number;
}

export interface MonthsVsFinanced {
  financed: number;
  months: number;
}
