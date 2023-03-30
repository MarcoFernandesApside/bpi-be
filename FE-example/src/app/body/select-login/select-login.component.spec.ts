import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLoginComponent } from './select-login.component';

describe('SelectLoginComponent', () => {
  let component: SelectLoginComponent;
  let fixture: ComponentFixture<SelectLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
