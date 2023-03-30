import { Component } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IconType } from 'src/app/component/icons/icons.component';
import { getKeyOfEnum } from 'src/app/enums/enumUtil';
import { WorkerType } from 'src/app/enums/worker-type';
import ColumnRowData from 'src/app/models/ColumnRowData';
import {
  getFormFromHistoric,
  getFormValidationErrors,
  removeHistoric,
  saveHistoricForm,
  validateAllFormFields,
} from 'src/app/utils/forms-builder';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { mockProducts } from 'src/app/enums/mocks-no-service';
import * as colData from 'src/app/utils/simulation-columns';
import { SimulationService } from 'src/app/services/simulation.service';
import { ErrorSimulation } from 'src/app/models/ErrorSimulation';

@Component({
  selector: 'app-simulation-v2',
  templateUrl: './simulation-v2.component.html',
  styleUrls: ['./simulation-v2.component.scss'],
})
export class SimulationV2Component {
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private simService: SimulationService
  ) {
    this.getIsIndependent = this.getIsIndependent.bind(this);
    this.getIsGuarantorDisabled = this.getIsGuarantorDisabled.bind(this);
    this.getSelectedProductStep2 = this.getSelectedProductStep2.bind(this);
    this.getSelectedWorkerStep2 = this.getSelectedWorkerStep2.bind(this);
    this.getGuarantorsControls = this.getGuarantorsControls.bind(this);
    this.addNewGuarantor = this.addNewGuarantor.bind(this);
    this.removeGuarantor = this.removeGuarantor.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  nextIcon: IconType = IconType.Next;
  resultsIcon: IconType = IconType.Results;
  alertIcon: IconType = IconType.Alert;

  baseForm!: FormGroup;

  step: number = 0;

  SIMULATION: { [id: string]: string } = sim;

  dependsOn: { [id: number]: number[] } = {
    2: [1],
  };

  step2FinancingProduct: string = '';
  step2WorkerType: string = '';
  formValues: any = {};
  isFirstUpdateDone: boolean = false;

  isModalShowing: boolean = false;

  errorsFound: ErrorSimulation = {};

  ngOnInit() {
    const options: AbstractControlOptions = {
      validators: [],
      asyncValidators: [],
    };
    this.baseForm = this.fb.group({}, options);
    this.step = +(this.route.snapshot.paramMap.get('step') as string);

    this.route.paramMap.subscribe((params) => {
      this.stepUpdate();
    });

    this.baseForm.valueChanges.subscribe((values) => {
      if (JSON.stringify(this.formValues) !== JSON.stringify(values)) {
        this.formValues = values;
        this.updateStepColumnsData();
      }
    });
  }

  stepUpdate() {
    Object.keys(this.baseForm?.value).forEach((control) => {
      this.baseForm?.removeControl(control, {});
    });
    const newStep: number = +(this.route.snapshot.paramMap.get(
      'step'
    ) as string);

    if (this.step != newStep) {
      console.log('clear');
      this.baseForm.clearAsyncValidators();
      this.baseForm.clearValidators();
      this.step = newStep;
      this.isFirstUpdateDone = false;
    }
    removeHistoric(`sim2-step-${this.step}`);
    this.updateBehaviorOnHistory();
  }

  updateBehaviorOnHistory() {
    if (!this.dependsOn[this.step]) {
      return null;
    }
    let histories: any[] = [];
    this.dependsOn[this.step].forEach((index) => {
      const data: any = getFormFromHistoric(`sim2-step-${index}`);
      if (data) {
        histories.push(data);
      }
    });
    switch (this.step) {
      case 2:
        this.step2FinancingProduct = histories[0].product;
        this.step2WorkerType = histories[0].type;
        break;
      default:
    }
    return true;
  }

  getIsIndependent(): boolean {
    return (
      this.baseForm.get(this.SIMULATION['fType'])?.value ===
      getKeyOfEnum(WorkerType.independent, WorkerType)
    );
  }

  next() {
    if (this.validateAllFields()) {
      //request here
      console.log(this.baseForm.value);
      saveHistoricForm(`sim2-step-${this.step}`, this.baseForm?.value);
      this.router.navigateByUrl(
        this.router.url.split('/simulation')[0] +
          '/simulation/' +
          (this.step + 1)
      );
    }
  }

  column1Step1ControlsByType() {
    let toDisable: ColumnRowData[] = !this.getIsIndependent()
      ? colData.independent(this.simService)
      : colData.notIndependent(this.simService);
    let toEnable: ColumnRowData[] = this.getIsIndependent()
      ? colData.independent(this.simService)
      : colData.notIndependent(this.simService);

    toDisable.forEach((element) => this.baseForm.removeControl(element.id, {}));
    this.linearAddControls(toEnable);
  }

  linearAddControls(data: ColumnRowData[]) {
    data.forEach((element) => {
      if (!this.baseForm.get(element.id)) {
        if (element.isNewArray) {
          const control = new FormArray([]);
          this.baseForm.addControl(element.id, control);
        } else {
          const control: FormControl = new FormControl(element.defaultValue, {
            validators: element.validator ? element.validator : [],
            asyncValidators: element.asyncValidator
              ? element.asyncValidator
              : [],
            updateOn: 'change',
          });

          this.baseForm.addControl(element.id, control);
        }
      }
    });
  }

  updateStepColumnsData() {
    switch (this.step) {
      case 1:
        this.column1Step1ControlsByType();
        this.linearAddControls(colData.col2Step1);
        break;
      case 2:
        const productKeys = Object.keys(mockProducts);
        const productVals = Object.values(mockProducts);

        const isCarProduct: boolean =
          this.step2FinancingProduct ===
          productKeys[productVals.indexOf(mockProducts.car)];

        const isIndependent =
          this.step2WorkerType ===
          getKeyOfEnum(WorkerType.independent, WorkerType);

        const selectedControls: ColumnRowData[] = isCarProduct
          ? colData.car(this.simService)
          : [];

        if (isCarProduct) {
          colData.car(this.simService)[3].defaultValue = !isIndependent;
          this.linearAddControls(colData.car(this.simService));
        } else {
          this.linearAddControls(colData.home);
        }

        if (isIndependent) {
          this.linearAddControls(colData.col1Step2Independent(this.simService));
        } else {
          this.linearAddControls(colData.col1Step2Contrated(this.simService));
        }
        this.linearAddControls(selectedControls);
        break;
      default:
    }

    setTimeout(() => {
      this.isFirstUpdateDone = true;
    }, 1);
  }

  getSelectedProductStep2() {
    return this.step2FinancingProduct;
  }

  getSelectedWorkerStep2() {
    return this.step2WorkerType;
  }

  addNewGuarantor() {
    const guarantors: AbstractControl<any, any>[] = (
      this.baseForm.get(this.SIMULATION['fGuarantors']) as FormArray
    ).controls;
    const nextIndex: number = guarantors.length;
    let finalFormGroup: { [id: string]: FormControl } = {};
    colData.genericGuarantor(this.simService).forEach((guarantorControl) => {
      const control: FormControl = guarantorControl.validator
        ? new FormControl(
            guarantorControl.defaultValue,
            guarantorControl.validator as AsyncValidatorFn | AsyncValidatorFn[]
          )
        : new FormControl(guarantorControl.defaultValue);
      finalFormGroup[guarantorControl.id + nextIndex] = control;
    });

    const control = new FormGroup(finalFormGroup);
    guarantors.push(control);
  }

  removeGuarantor(indentifier: any) {
    const guarantors: AbstractControl<any, any>[] = (
      this.baseForm.get(this.SIMULATION['fGuarantors']) as FormArray
    ).controls;
    guarantors.splice(indentifier, 1);
  }

  getGuarantorsControls() {
    return this.baseForm
      ? (<FormArray>this.baseForm.get('guarantors')).controls
      : [];
  }

  getIsGuarantorDisabled(): boolean {
    const guarantorCheck: AbstractControl<any, any> | null = this.baseForm
      ? this.baseForm.get('bguarantor')
      : null;
    const result = guarantorCheck ? !guarantorCheck.value : false;

    const social: AbstractControl<any, any> | null = this.baseForm.get(
      this.SIMULATION['fSocial'] + 0
    );
    const age: AbstractControl<any, any> | null = this.baseForm.get(
      this.SIMULATION['fAge'] + 0
    );
    const chronic: AbstractControl<any, any> | null = this.baseForm.get(
      this.SIMULATION['fChronic'] + 0
    );

    if (result) {
      social?.disable();
      age?.disable();
      chronic?.disable();
    } else {
      social?.enable();
      age?.enable();
      chronic?.enable();
    }
    return result;
  }

  results() {
    if (this.validateAllFields()) {
      //request here
    }
  }

  validateAllFields(): boolean {
    this.baseForm.setErrors(null);
    validateAllFormFields(this.baseForm);
    this.errorsFound = getFormValidationErrors(this.baseForm);
    console.log(this.errorsFound);
    const count: number = Object.keys(this.errorsFound).length;
    if (count === 0) {
      return true;
    } else {
      this.changeModalState(true);
      return false;
    }
  }

  changeModalState(isShowing: boolean = false) {
    this.isModalShowing = isShowing;
  }

  closeModal(): void {
    this.changeModalState();
  }
}
