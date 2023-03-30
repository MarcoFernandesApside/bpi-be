import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStep2C1Component } from './simulation-step2-c1.component';

describe('SimulationStep2C1Component', () => {
  let component: SimulationStep2C1Component;
  let fixture: ComponentFixture<SimulationStep2C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationStep2C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationStep2C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
