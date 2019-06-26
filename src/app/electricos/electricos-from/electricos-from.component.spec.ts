import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricosFromComponent } from './electricos-from.component';

describe('ElectricosFromComponent', () => {
  let component: ElectricosFromComponent;
  let fixture: ComponentFixture<ElectricosFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricosFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricosFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
