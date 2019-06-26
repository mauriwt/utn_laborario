import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbActivoComponent } from './ub-activo.component';

describe('UbActivoComponent', () => {
  let component: UbActivoComponent;
  let fixture: ComponentFixture<UbActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
