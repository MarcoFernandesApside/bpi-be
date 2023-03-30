import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBiComponent } from './login-bi.component';

describe('LoginBiComponent', () => {
  let component: LoginBiComponent;
  let fixture: ComponentFixture<LoginBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
