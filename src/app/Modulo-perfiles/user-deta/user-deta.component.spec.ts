import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetaComponent } from './user-deta.component';

describe('UserDetaComponent', () => {
  let component: UserDetaComponent;
  let fixture: ComponentFixture<UserDetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
