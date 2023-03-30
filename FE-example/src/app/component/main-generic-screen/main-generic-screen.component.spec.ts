import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGenericScreenComponent } from './main-generic-screen.component';

describe('MainGenericScreenComponent', () => {
  let component: MainGenericScreenComponent;
  let fixture: ComponentFixture<MainGenericScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGenericScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGenericScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
