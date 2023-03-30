import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectControllerComponent } from './select-controller.component';

describe('SelectControllerComponent', () => {
  let component: SelectControllerComponent;
  let fixture: ComponentFixture<SelectControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
