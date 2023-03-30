import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationV2Component } from './simulation-v2.component';

describe('SimulationV2Component', () => {
  let component: SimulationV2Component;
  let fixture: ComponentFixture<SimulationV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
