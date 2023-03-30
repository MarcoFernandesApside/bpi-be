import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterptConfigInputComponent } from './interpt-config-input.component';

describe('InterptConfigInputComponent', () => {
  let component: InterptConfigInputComponent;
  let fixture: ComponentFixture<InterptConfigInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterptConfigInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterptConfigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
