import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioFromComponent } from './horario-from.component';

describe('HorarioFromComponent', () => {
  let component: HorarioFromComponent;
  let fixture: ComponentFixture<HorarioFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
