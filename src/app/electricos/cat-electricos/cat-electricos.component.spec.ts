import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatElectricosComponent } from './cat-electricos.component';

describe('CatElectricosComponent', () => {
  let component: CatElectricosComponent;
  let fixture: ComponentFixture<CatElectricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatElectricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatElectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
