import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorInputCardComponent } from './guarantor-input-card.component';

describe('GuarantorInputCardComponent', () => {
  let component: GuarantorInputCardComponent;
  let fixture: ComponentFixture<GuarantorInputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarantorInputCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantorInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
