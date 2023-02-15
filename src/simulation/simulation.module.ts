import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { SimulationController } from './simulation.controller';
import { SimulationService } from './simulation.service';

@Module({
  //imports: [PrismaService],
  controllers: [SimulationController],
  providers: [SimulationService, PrismaService],
})
export class SimulationModule {}
