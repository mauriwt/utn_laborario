import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbElectricosComponent } from './ub-electricos.component';

describe('UbElectricosComponent', () => {
  let component: UbElectricosComponent;
  let fixture: ComponentFixture<UbElectricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbElectricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbElectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
