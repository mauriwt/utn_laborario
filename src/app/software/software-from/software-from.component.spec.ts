import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFromComponent } from './software-from.component';

describe('SoftwareFromComponent', () => {
  let component: SoftwareFromComponent;
  let fixture: ComponentFixture<SoftwareFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
