import { Component } from '@angular/core';
import { enumAsObj, enumOBJ } from 'src/app/enums/enumUtil';
import { WorkerType } from 'src/app/enums/worker-type';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { mockProducts } from 'src/app/enums/mocks-no-service';

@Component({
  selector: 'app-simulation-step1-c2',
  templateUrl: './simulation-step1-c2.component.html',
  styleUrls: ['./simulation-step1-c2.component.scss'],
  host: {
    style: 'display: contents',
  },
})
export class SimulationStep1C2Component {
  SIMULATION: { [id: string]: string } = sim;

  vType: enumOBJ = enumAsObj(WorkerType);
  vProduct: enumOBJ = mockProducts;
}
