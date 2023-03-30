import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginGenericScreenComponent } from './begin-generic-screen.component';

describe('BeginGenericScreenComponent', () => {
  let component: BeginGenericScreenComponent;
  let fixture: ComponentFixture<BeginGenericScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginGenericScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginGenericScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
