import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimulationModule } from './simulation/simulation.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [SimulationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
