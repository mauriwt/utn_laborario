import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricosComponent } from './electricos.component';

describe('ElectricosComponent', () => {
  let component: ElectricosComponent;
  let fixture: ComponentFixture<ElectricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
