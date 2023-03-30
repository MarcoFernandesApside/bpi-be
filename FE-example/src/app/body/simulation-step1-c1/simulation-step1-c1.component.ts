import { Component, Input } from '@angular/core';
import { enumAsObj, enumOBJ } from 'src/app/enums/enumUtil';
import { LineOfWork } from 'src/app/enums/line-of-work';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { mockCompanyLineWork } from 'src/app/enums/mocks-no-service';

@Component({
  selector: 'app-simulation-step1-c1',
  templateUrl: './simulation-step1-c1.component.html',
  styleUrls: ['./simulation-step1-c1.component.scss'],
  host: {
    style: 'display: contents',
  },
})
export class SimulationStep1C1Component {
  SIMULATION: { [id: string]: string } = sim;

  vLineWork: enumOBJ = enumAsObj(LineOfWork);
  vCompanyLineWork: enumOBJ = mockCompanyLineWork;

  @Input()
  getIsIndependent: () => boolean = () => true;
}
