import { Component, Input } from '@angular/core';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { getKeyOfEnum } from 'src/app/enums/enumUtil';
import { WorkerType } from 'src/app/enums/worker-type';

@Component({
  selector: 'app-simulation-step2-c1',
  templateUrl: './simulation-step2-c1.component.html',
  styleUrls: ['./simulation-step2-c1.component.scss'],
  host: {
    style: 'display: contents',
  },
})
export class SimulationStep2C1Component {
  SIMULATION: { [id: string]: string } = sim;

  @Input()
  getSelectedWorker: () => string = () => '';

  getIsIndependent() {
    return (
      this.getSelectedWorker() ===
      getKeyOfEnum(WorkerType.independent, WorkerType)
    );
  }
}
