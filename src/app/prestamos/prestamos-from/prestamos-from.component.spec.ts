import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosFromComponent } from './prestamos-from.component';

describe('PrestamosFromComponent', () => {
  let component: PrestamosFromComponent;
  let fixture: ComponentFixture<PrestamosFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamosFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
