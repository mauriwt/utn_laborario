import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioFromComponent } from './espacio-from.component';

describe('EspacioFromComponent', () => {
  let component: EspacioFromComponent;
  let fixture: ComponentFixture<EspacioFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacioFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
