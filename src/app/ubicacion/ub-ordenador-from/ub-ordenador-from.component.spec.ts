import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbOrdenadorFromComponent } from './ub-ordenador-from.component';

describe('UbOrdenadorFromComponent', () => {
  let component: UbOrdenadorFromComponent;
  let fixture: ComponentFixture<UbOrdenadorFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbOrdenadorFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbOrdenadorFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
