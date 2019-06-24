import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatActivosComponent } from './cat-activos.component';

describe('CatActivosComponent', () => {
  let component: CatActivosComponent;
  let fixture: ComponentFixture<CatActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
