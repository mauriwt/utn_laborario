import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMantenimientoComponent } from './tipo-mantenimiento.component';

describe('TipoMantenimientoComponent', () => {
  let component: TipoMantenimientoComponent;
  let fixture: ComponentFixture<TipoMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
