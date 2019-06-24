import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosFromComponent } from './activos-from.component';

describe('ActivosFromComponent', () => {
  let component: ActivosFromComponent;
  let fixture: ComponentFixture<ActivosFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivosFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivosFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
