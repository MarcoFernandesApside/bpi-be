import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxControllerComponent } from './checkbox-controller.component';

describe('CheckboxControllerComponent', () => {
  let component: CheckboxControllerComponent;
  let fixture: ComponentFixture<CheckboxControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
