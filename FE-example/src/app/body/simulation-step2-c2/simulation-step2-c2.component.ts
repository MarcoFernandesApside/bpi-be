import { Component, Input } from '@angular/core';
import { SIMULATION as sim } from 'src/app/constants/simulation';
import { mockProducts } from 'src/app/enums/mocks-no-service';

@Component({
  selector: 'app-simulation-step2-c2',
  templateUrl: './simulation-step2-c2.component.html',
  styleUrls: ['./simulation-step2-c2.component.scss'],
  host: {
    style: 'display: contents',
  },
})
export class SimulationStep2C2Component {
  SIMULATION: { [id: string]: string } = sim;

  @Input()
  getIsGuarantorDisabled: () => boolean = () => false;

  @Input()
  getSelectedProduct: () => string = () => '';

  @Input()
  addNewGuarantor: () => void = () => {};

  @Input()
  removeGuarantor: (indentifier: any) => void = () => {};

  @Input()
  getGuarantorsControls: () => any[] = () => [];

  getIsCarProduct() {
    const productKeys = Object.keys(mockProducts);
    const productVals = Object.values(mockProducts);
    return (
      this.getSelectedProduct() ===
      productKeys[productVals.indexOf(mockProducts.car)]
    );
  }
}
