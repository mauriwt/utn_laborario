import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadorFromComponent } from './ordenador-from.component';

describe('OrdenadorFromComponent', () => {
  let component: OrdenadorFromComponent;
  let fixture: ComponentFixture<OrdenadorFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenadorFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenadorFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
