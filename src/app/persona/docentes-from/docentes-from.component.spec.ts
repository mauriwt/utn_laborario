import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesFromComponent } from './docentes-from.component';

describe('DocentesFromComponent', () => {
  let component: DocentesFromComponent;
  let fixture: ComponentFixture<DocentesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
