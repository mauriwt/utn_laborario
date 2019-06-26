import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEspacioComponent } from './tipo-espacio.component';

describe('TipoEspacioComponent', () => {
  let component: TipoEspacioComponent;
  let fixture: ComponentFixture<TipoEspacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEspacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
