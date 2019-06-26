import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaOrdenadorComponent } from './marca-ordenador.component';

describe('MarcaOrdenadorComponent', () => {
  let component: MarcaOrdenadorComponent;
  let fixture: ComponentFixture<MarcaOrdenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaOrdenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaOrdenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
