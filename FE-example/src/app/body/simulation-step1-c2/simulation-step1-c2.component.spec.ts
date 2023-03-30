import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStep1C2Component } from './simulation-step1-c2.component';

describe('SimulationStep1C2Component', () => {
  let component: SimulationStep1C2Component;
  let fixture: ComponentFixture<SimulationStep1C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationStep1C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationStep1C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
