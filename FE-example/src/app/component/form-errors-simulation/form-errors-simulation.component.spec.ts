import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorsSimulationComponent } from './form-errors-simulation.component';

describe('FormErrorsSimulationComponent', () => {
  let component: FormErrorsSimulationComponent;
  let fixture: ComponentFixture<FormErrorsSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorsSimulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorsSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
