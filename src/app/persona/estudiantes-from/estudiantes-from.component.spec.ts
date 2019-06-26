import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesFromComponent } from './estudiantes-from.component';

describe('EstudiantesFromComponent', () => {
  let component: EstudiantesFromComponent;
  let fixture: ComponentFixture<EstudiantesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
