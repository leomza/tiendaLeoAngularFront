import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWebComponent } from './login-web.component';

describe('LoginWebComponent', () => {
  let component: LoginWebComponent;
  let fixture: ComponentFixture<LoginWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
