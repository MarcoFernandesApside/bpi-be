import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorsContainerComponent } from './guarantors-container.component';

describe('GuarantorsContainerComponent', () => {
  let component: GuarantorsContainerComponent;
  let fixture: ComponentFixture<GuarantorsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarantorsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
