import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbOrdenadorComponent } from './ub-ordenador.component';

describe('UbOrdenadorComponent', () => {
  let component: UbOrdenadorComponent;
  let fixture: ComponentFixture<UbOrdenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbOrdenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbOrdenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
