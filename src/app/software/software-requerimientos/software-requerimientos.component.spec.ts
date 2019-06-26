import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareRequerimientosComponent } from './software-requerimientos.component';

describe('SoftwareRequerimientosComponent', () => {
  let component: SoftwareRequerimientosComponent;
  let fixture: ComponentFixture<SoftwareRequerimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareRequerimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
