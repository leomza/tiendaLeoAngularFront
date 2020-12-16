import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioWebComponent } from './usuario-web.component';

describe('UsuarioWebComponent', () => {
  let component: UsuarioWebComponent;
  let fixture: ComponentFixture<UsuarioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
