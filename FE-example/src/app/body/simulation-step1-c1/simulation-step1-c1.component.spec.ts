import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStep1C1Component } from './simulation-step1-c1.component';

describe('SimulationStep1C1Component', () => {
  let component: SimulationStep1C1Component;
  let fixture: ComponentFixture<SimulationStep1C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationStep1C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationStep1C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
