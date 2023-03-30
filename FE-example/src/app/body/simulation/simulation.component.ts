import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { switchMap } from 'rxjs';
import {
  getColumns,
  interptConfigData,
  removeHistoric,
  saveHistoricForm,
} from 'src/app/utils/forms-builder';
import {
  IConfigData,
  SimulationStep1,
  SimulationStep2,
} from 'src/app/utils/forms-config';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent {
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  baseForm: FormGroup | null = null;

  elements?: IConfigData[];

  columns?: { column1: IConfigData[]; column2: IConfigData[] };

  data: { [id: string]: IConfigData } = {};

  step: number = 0;

  ngOnInit() {
    this.baseForm = this.fb.group({});
    this.stepUpdate();
    this.route.paramMap.subscribe((params) => {
      this.stepUpdate();
    });
  }

  stepUpdate() {
    this.step = +(this.route.snapshot.paramMap.get('step') as string);
    this.switchOnStep();
    this.elements = interptConfigData(this.data, this.baseForm);
    this.columns = getColumns(this.elements);
    removeHistoric(`sim-step-${this.step}`);
  }

  switchOnStep() {
    switch (this.step) {
      case 1:
        this.data = SimulationStep1();
        break;
      case 2:
        this.data = SimulationStep2();
        break;
      default:
        this.data = {};
    }
  }

  getColumn(number: number) {
    if (number === 1) {
      return this.columns?.column1 ? this.columns?.column1 : [];
    } else {
      return this.columns?.column2 ? this.columns?.column2 : [];
    }
  }

  getFormGroup() {
    return this.baseForm as FormGroup;
  }

  next() {
    console.log(this.baseForm?.value);
    saveHistoricForm(`sim-step-${this.step}`, this.baseForm?.value);
    this.router.navigateByUrl(
      this.router.url.split('/simulation')[0] + '/simulation/' + (this.step + 1)
    );
  }
}
