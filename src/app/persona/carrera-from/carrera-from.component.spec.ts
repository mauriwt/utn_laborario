import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraFromComponent } from './carrera-from.component';

describe('CarreraFromComponent', () => {
  let component: CarreraFromComponent;
  let fixture: ComponentFixture<CarreraFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreraFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
