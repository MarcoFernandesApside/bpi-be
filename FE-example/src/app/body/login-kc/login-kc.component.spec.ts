import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginKcComponent } from './login-kc.component';

describe('LoginKcComponent', () => {
  let component: LoginKcComponent;
  let fixture: ComponentFixture<LoginKcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginKcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginKcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
