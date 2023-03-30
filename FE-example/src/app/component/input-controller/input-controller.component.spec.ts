import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControllerComponent } from './input-controller.component';

describe('InputControllerComponent', () => {
  let component: InputControllerComponent;
  let fixture: ComponentFixture<InputControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
