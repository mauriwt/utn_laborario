import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoFromComponent } from './mantenimiento-from.component';

describe('MantenimientoFromComponent', () => {
  let component: MantenimientoFromComponent;
  let fixture: ComponentFixture<MantenimientoFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
