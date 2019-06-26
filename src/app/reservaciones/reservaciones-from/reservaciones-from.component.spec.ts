import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesFromComponent } from './reservaciones-from.component';

describe('ReservacionesFromComponent', () => {
  let component: ReservacionesFromComponent;
  let fixture: ComponentFixture<ReservacionesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
