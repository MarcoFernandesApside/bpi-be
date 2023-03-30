import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStep2C2Component } from './simulation-step2-c2.component';

describe('SimulationStep2C2Component', () => {
  let component: SimulationStep2C2Component;
  let fixture: ComponentFixture<SimulationStep2C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationStep2C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationStep2C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
