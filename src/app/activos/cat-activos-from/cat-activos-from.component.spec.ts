import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatActivosFromComponent } from './cat-activos-from.component';

describe('CatActivosFromComponent', () => {
  let component: CatActivosFromComponent;
  let fixture: ComponentFixture<CatActivosFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatActivosFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatActivosFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
