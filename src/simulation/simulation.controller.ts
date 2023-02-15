import { Body, Controller, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { WorkerType } from 'src/enums/WorkerType';
import {
  FinancedVsAmount,
  GuarantorInput,
  MonthsVsFinanced,
  Step1Contracted,
  Step1Independent,
  Step2,
} from 'src/model/simulation/simulation.model';
import { SimulationService } from './simulation.service';

@Controller('simulation')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Post('/step/:id')
  step(
    @Param('id') id: string,
    @Body() stepData: Step1Contracted | Step1Independent | Step2,
  ) {
    switch (+id) {
      case 1:
        return this.step1(stepData as Step1Contracted | Step1Independent);

      case 2:
        return this.step2(stepData as Step2);
    }
  }

  @Post('/financedvsamount')
  financedVsAmountValidator(@Body() values: FinancedVsAmount) {
    const isValid: boolean =
      !!+values.financed &&
      !!+values.amount &&
      +values.financed < +values.amount * 0.9;
    return { isValid };
  }

  @Post('/socialnumber')
  socialNumberValidator(@Body() data: { social: number }) {
    const isValid: boolean =
      data.social.toString().length === 9 && !!+data.social;
    return { isValid };
  }

  @Post('/months')
  monthsVsFinancedValidator(@Body() values: MonthsVsFinanced) {
    const amountPerMonth = +values.financed / +values.months;
    const isValid: boolean =
      !!+values.financed &&
      !!+values.months &&
      !!+amountPerMonth &&
      amountPerMonth > 80;
    return { isValid, amountPerMonth };
  }

  @Post('/age')
  ageValidator(@Body() data: { age: number }) {
    const isValid: boolean = !!+data.age && +data.age > 17;
    return { isValid };
  }

  /**
   * 
   * @param stepData 
   * @returns 
   * 
   * {
        "guarantors": [
            {
                "social0": "789456123",
                "age0": "44",
                "chronic0": [
                    "eye sight",
                    "leg compromised"
                ]
            }
        ],
        "amount": "234",
        "financed": "123",
        "months": "4",
        "social": "123456789",
        "age": "21",
        "chronic": [
            "no"
        ],
        "simulationID": 9
    }
   */
  private step2(stepData: Step2) {
    const simulationData: Prisma.SimulationCreateInput = {
      isFinalized: true,
      amount: +(stepData.amount ? stepData.amount : -1),
      financedAmount: +(stepData.financed ? stepData.financed : -1),
      monthsNeeded: +(stepData.months ? stepData.months : -1),
    };

    const baseInfoData: Prisma.BaseInfoSimCreateInput = {
      age: +(stepData.age ? stepData.age : -1),
      socialNumber: stepData.social ? stepData.social : -1,
    };

    const chronicInfoData: Prisma.ChronicDiseaseCreateInput[] =
      stepData.chronic.map(
        (disease) =>
          ({
            name: disease,
          } as Prisma.ChronicDiseaseCreateInput),
      );

    const independentWorkerData: Prisma.IndependentSimCreateInput = {
      annualIncome: -1,
      averageMonthlyIncome: -1,
      lineOfWork: '',
      timeAsIndependent: -1,
      personalNetworth: stepData.personal ? stepData.personal : -1,
    };

    let guarantorData: GuarantorInput = {};

    if (!!stepData.guarantors && stepData.guarantors.length > 0) {
      for (const guarantor of stepData.guarantors) {
        const keys = Object.keys(guarantor);
        const vals: any = Object.values(guarantor);
        const socialIndex: number = keys.findIndex((st) =>
          st.includes('social'),
        );
        const ageIndex: number = keys.findIndex((st) => st.includes('age'));
        const chronicIndex: number = keys.findIndex((st) =>
          st.includes('chronic'),
        );
        const currentChronic: Prisma.ChronicDiseaseCreateInput[] = vals[
          chronicIndex
        ].map(
          (disease) =>
            ({
              name: disease,
            } as Prisma.ChronicDiseaseCreateInput),
        );

        guarantorData[vals[socialIndex]] = {
          baseInfo: {
            age: +vals[ageIndex],
            socialNumber: +vals[socialIndex],
          },
          chronic: currentChronic,
        };
      }
    }

    return this.simulationService.updateSimulationStep2(
      stepData.simulationID as number,
      simulationData,
      baseInfoData,
      stepData.bguarantor !== undefined ? stepData.bguarantor : false,
      chronicInfoData,
      independentWorkerData,
      guarantorData,
    );
  }

  /**
   * 
   * @param stepData 
   * @returns 
   * 
   * {
        "type": "independent",
        "product": "home",
        "social": "123134566",
        "itime": "12",
        "iaverage": "2000",
        "iannual": "24000",
        "linework": "socialServices"
    }
   */
  private step1(stepData: Step1Contracted | Step1Independent) {
    const type: WorkerType =
      WorkerType[(stepData as Step1Contracted).type as WorkerType];
    const workerTypeData: Prisma.WorkerTypeSimCreateInput = {
      type,
      simulationData: {},
    };
    const workerSelectedData:
      | Prisma.IndependentSimCreateInput
      | Prisma.ContratedSimCreateInput = this.getWorkerSelectedData(stepData);
    const simulationData: Prisma.SimulationCreateInput = {
      isFinalized: false,
    };
    const productSelectedData: Prisma.ProductSimCreateInput = {
      type: stepData.product,
    };
    const baseInfoData: Prisma.BaseInfoSimCreateInput = {
      age: -1,
      socialNumber: +((stepData as Step1Independent) &&
      (stepData as Step1Independent).social
        ? (stepData as Step1Independent).social
        : -1),
    };

    return this.simulationService
      .addSimulationStep1(
        workerTypeData,
        workerSelectedData,
        simulationData,
        productSelectedData,
        baseInfoData,
      )
      .then((id) => ({ id }));
  }

  private getWorkerSelectedData(
    stepData: Step1Contracted | Step1Independent,
  ): Prisma.IndependentSimCreateInput | Prisma.ContratedSimCreateInput {
    switch (stepData.type) {
      case WorkerType.contracted:
      case Object.keys(WorkerType)[
        Object.values(WorkerType).indexOf(WorkerType.contracted)
      ]:
        const stepContracted: Step1Contracted = stepData as Step1Contracted;
        const contracted: Prisma.ContratedSimCreateInput = {
          simulationData: {},
          company: stepContracted.company,
          companySocialNumber: stepContracted.csocial,
          companyLineOfWork: stepContracted.clinework,
          timeInCompany: stepContracted.timework,
          netSalary: stepContracted.net,
        };
        return contracted;
      case WorkerType.independent:
      case Object.keys(WorkerType)[
        Object.values(WorkerType).indexOf(WorkerType.independent)
      ]:
        const stepIndependent: Step1Independent = stepData as Step1Independent;
        const independent: Prisma.IndependentSimCreateInput = {
          simulationData: {},
          timeAsIndependent: +stepIndependent.itime,
          averageMonthlyIncome: +stepIndependent.iaverage,
          lineOfWork: stepIndependent.linework,
          annualIncome: +stepIndependent.iannual,
        };
        return independent;
    }
  }
}
