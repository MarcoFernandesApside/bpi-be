import { Injectable } from '@nestjs/common';
import {
  BaseInfoSim,
  CarSim,
  ContratedSim,
  IndependentSim,
  Prisma,
  ProductSim,
  Simulation as SimulationModel,
  WorkerTypeSim,
} from '@prisma/client';
import { ProductType } from 'src/enums/ProductType';
import { WorkerType } from 'src/enums/WorkerType';
import { GuarantorInput } from 'src/model/simulation/simulation.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomNumberInInterval } from 'src/util/extra';

@Injectable()
export class SimulationService {
  constructor(private prisma: PrismaService) {}

  getSimulations(filter: string): string {
    return 'Hello World!';
  }

  async updateSimulationStep2(
    simulationID: number,
    simulationData: Prisma.SimulationCreateInput,
    baseInfoData: Prisma.BaseInfoSimCreateInput,
    carNeedsGuarantor: boolean,
    chronicInfoData: Prisma.ChronicDiseaseCreateInput[],
    independentWorkerData: Prisma.IndependentSimCreateInput,
    guarantorData: GuarantorInput,
  ) {
    return new Promise(async (resolve, reject) => {
      const keys: string[] = Object.keys(guarantorData);
      if (
        !+simulationData.amount ||
        !+simulationData.financedAmount ||
        !+simulationData.monthsNeeded ||
        !+simulationID ||
        !+baseInfoData.age ||
        (!+baseInfoData.socialNumber &&
          baseInfoData.socialNumber !== null &&
          baseInfoData.socialNumber !== undefined) ||
        !chronicInfoData.length ||
        keys.some(
          (key) =>
            !+guarantorData[key].baseInfo.age ||
            (!+guarantorData[key].baseInfo.socialNumber &&
              guarantorData[key].baseInfo.socialNumber !== null &&
              guarantorData[key].baseInfo.socialNumber !== undefined) ||
            !guarantorData[key].chronic.length,
        )
      ) {
        resolve({
          hasSucceded: false,
          isSimulationApproved: false,
          approvedAmount: 0,
        });
      }
      try {
        await this.prisma.simulation.update({
          where: { id: simulationID },
          data: { ...simulationData, id: simulationID },
        });

        const baseInfo: BaseInfoSim = await this.prisma.baseInfoSim.findFirst({
          where: { simulationId: simulationID },
        });

        await this.prisma.baseInfoSim.update({
          where: { simulationId: simulationID },
          data: {
            ...baseInfoData,
            socialNumber:
              baseInfo.socialNumber > -1
                ? baseInfo.socialNumber
                : baseInfoData.socialNumber,
          },
        });

        for (const desease of chronicInfoData) {
          await this.prisma.chronicDisease.create({
            data: { name: desease.name, baseInfoId: baseInfo.id },
          });
        }

        const workerType: WorkerTypeSim =
          await this.prisma.workerTypeSim.findFirst({
            where: { simulationId: simulationID },
          });

        await this.updateIndependentPersonalN(
          workerType,
          independentWorkerData,
        );

        const productType: ProductSim = await this.prisma.productSim.findFirst({
          where: { simulationId: simulationID },
        });

        await this.createProductFromType(
          productType,
          carNeedsGuarantor,
          guarantorData,
        );

        const isSimulationApproved: boolean =
          randomNumberInInterval(0, 1) < 0.5;
        const approvedAmount: number = isSimulationApproved
          ? randomNumberInInterval(
              simulationData.financedAmount * 0.6,
              simulationData.amount,
            )
          : 0;

        resolve({ hasSucceded: true, isSimulationApproved, approvedAmount });
      } catch (err) {
        console.log('found error', err);
        reject({ error: err });
      }
    });
  }

  private async createProductFromType(
    productType: ProductSim,
    carNeedsGuarantor: boolean,
    guarantorData: GuarantorInput,
  ) {
    return new Promise(async (resolve) => {
      switch (productType.type) {
        case ProductType.car:
        case Object.keys(ProductType)[
          Object.values(ProductType).indexOf(ProductType.car)
        ]:
          const carData: CarSim = await this.prisma.carSim.create({
            data: {
              needsGuarantor: carNeedsGuarantor,
            },
          });

          await this.prisma.productSim.update({
            where: { id: productType.id },
            data: { ...productType, carSimId: carData.id },
          });

          if (carNeedsGuarantor) {
            const guarantorCarData =
              guarantorData[Object.keys(guarantorData)[0]];
            const guarantor = await this.prisma.baseInfoSim.create({
              data: {
                ...guarantorCarData.baseInfo,
                carSimId: carData.id,
              },
            });

            for (const desease of guarantorCarData.chronic) {
              await this.prisma.chronicDisease.create({
                data: { ...desease, baseInfoId: guarantor.id },
              });
            }
          }

          break;
        case ProductType.home:
        case Object.keys(ProductType)[
          Object.values(ProductType).indexOf(ProductType.home)
        ]:
          const homeData = await this.prisma.homeSim.create({ data: {} });

          await this.prisma.productSim.update({
            where: { id: productType.id },
            data: { ...productType, homeSimId: homeData.id },
          });

          const guarantorKeys = Object.keys(guarantorData);

          for (const key of guarantorKeys) {
            const guarantorHomeData = guarantorData[key];
            const guarantor = await this.prisma.baseInfoSim.create({
              data: {
                ...guarantorHomeData.baseInfo,
                homeSimId: homeData.id,
              },
            });

            for (const desease of guarantorHomeData.chronic) {
              await this.prisma.chronicDisease.create({
                data: { ...desease, baseInfoId: guarantor.id },
              });
            }
          }

          break;
      }

      resolve('');
    });
  }

  private async updateIndependentPersonalN(
    workerType: WorkerTypeSim,
    independentWorkerData: Prisma.IndependentSimCreateInput,
  ) {
    return new Promise(async (resolve) => {
      switch (workerType.type) {
        case WorkerType.contracted:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.contracted)
        ]:
          break;
        case WorkerType.independent:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.independent)
        ]:
          const independentData = await this.prisma.independentSim.findFirst({
            where: { workerTypeId: workerType.id },
          });

          await this.prisma.independentSim.update({
            where: { id: independentData.id },
            data: {
              ...independentData,
              personalNetworth: independentWorkerData.personalNetworth,
            },
          });

          break;
      }

      resolve('');
    });
  }

  async addSimulationStep1(
    workerTypeData: Prisma.WorkerTypeSimCreateInput,
    workerSelectedData:
      | Prisma.IndependentSimCreateInput
      | Prisma.ContratedSimCreateInput,
    simulationData: Prisma.SimulationCreateInput,
    productSelectedData: Prisma.ProductSimCreateInput,
    baseInfoData: Prisma.BaseInfoSimCreateInput,
  ) {
    return new Promise(async (resolve, reject) => {
      let workerTypeDB: WorkerTypeSim;
      let workerSelectedDB: IndependentSim | ContratedSim;
      let productSelectedDB: ProductSim;
      let baseInfoDB: BaseInfoSim;
      let simulationDB: SimulationModel;

      try {
        workerTypeDB = await this.prisma.workerTypeSim.create({
          data: workerTypeData,
        });

        workerSelectedDB = await this.switchOnWorkerType(
          workerTypeData.type,
          workerSelectedData,
        );

        ({ baseInfo: baseInfoDB, typeData: workerSelectedDB } =
          await this.addWorkerData(
            workerTypeData.type,
            workerSelectedDB,
            workerTypeDB,
            baseInfoData,
          ));

        productSelectedDB = await this.addProductToSimulate(
          productSelectedData,
        );

        simulationDB = await this.prisma.simulation.create({
          data: simulationData,
        });

        workerSelectedDB.workerTypeId = workerTypeDB.id;
        workerTypeDB.simulationId = simulationDB.id;
        baseInfoDB.simulationId = simulationDB.id;
        productSelectedDB.simulationId = simulationDB.id;

        await this.prisma.workerTypeSim.update({
          where: { id: workerTypeDB.id },
          data: workerTypeDB,
        });

        await this.prisma.productSim.update({
          where: { id: productSelectedDB.id },
          data: productSelectedDB,
        });

        await this.prisma.baseInfoSim.update({
          where: { id: baseInfoDB.id },
          data: baseInfoDB,
        });

        await this.updateWorkerWithSimulation(
          workerTypeData.type,
          workerSelectedDB,
        );

        resolve(simulationDB.id);
      } catch (err) {
        reject({ error: err });
      }
    });
  }

  private addProductToSimulate(
    data: Prisma.ProductSimCreateInput,
  ): Promise<ProductSim> {
    return new Promise((resolve, reject) => {
      this.prisma.productSim
        .create({ data })
        .then((value: ProductSim) => resolve(value));
    });
  }

  private updateWorkerWithSimulation(
    selected: string,
    workerSelectedDB: IndependentSim | ContratedSim,
  ) {
    return new Promise(async (resolve) => {
      switch (selected) {
        case WorkerType.contracted:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.contracted)
        ]:
          await this.prisma.contratedSim.update({
            where: { id: workerSelectedDB.id },
            data: workerSelectedDB,
          });
          break;
        case WorkerType.independent:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.independent)
        ]:
          await this.prisma.independentSim.update({
            where: { id: workerSelectedDB.id },
            data: workerSelectedDB,
          });
          break;
      }

      resolve('');
    });
  }

  private async addWorkerData(
    selected: string,
    workerSelectedDB: IndependentSim | ContratedSim,
    workerTypeDB: WorkerTypeSim,
    baseInfoData: Prisma.BaseInfoSimCreateInput,
  ): Promise<{
    baseInfo: BaseInfoSim | null;
    typeData: IndependentSim | ContratedSim;
  }> {
    let baseInfo: BaseInfoSim;
    workerSelectedDB.workerTypeId = workerTypeDB.id;

    baseInfo = await this.prisma.baseInfoSim.create({ data: baseInfoData });

    return new Promise(async (resolve, reject) => {
      switch (selected) {
        case WorkerType.contracted:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.contracted)
        ]:
          this.prisma.contratedSim
            .update({
              where: { id: workerSelectedDB.id },
              data: workerSelectedDB,
            })
            .then((value: ContratedSim) =>
              resolve({ baseInfo: baseInfo, typeData: value }),
            );
          break;
        case WorkerType.independent:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.independent)
        ]:
          this.prisma.independentSim
            .update({
              where: { id: workerSelectedDB.id },
              data: workerSelectedDB,
            })
            .then((value: IndependentSim) =>
              resolve({ baseInfo: baseInfo, typeData: value }),
            );
          break;
        default:
          reject({ error: 'No selected type was found' });
      }
    });
  }

  private switchOnWorkerType(
    selected: string,
    workerSelectedData:
      | Prisma.IndependentSimCreateInput
      | Prisma.ContratedSimCreateInput,
  ): Promise<IndependentSim | ContratedSim> {
    return new Promise((resolve, reject) => {
      switch (selected) {
        case WorkerType.contracted:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.contracted)
        ]:
          this.prisma.contratedSim
            .create({
              data: workerSelectedData as Prisma.ContratedSimCreateInput,
            })
            .then((value: ContratedSim) => resolve(value));

          break;
        case WorkerType.independent:
        case Object.keys(WorkerType)[
          Object.values(WorkerType).indexOf(WorkerType.independent)
        ]:
          this.prisma.independentSim
            .create({
              data: workerSelectedData as Prisma.IndependentSimCreateInput,
            })
            .then((value: IndependentSim) => resolve(value));
          break;
        default:
          reject({ error: 'No selected type was found' });
      }
    });
  }
}
