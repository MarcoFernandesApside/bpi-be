import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKcComponent } from './main-kc.component';

describe('MainKcComponent', () => {
  let component: MainKcComponent;
  let fixture: ComponentFixture<MainKcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainKcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainKcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
