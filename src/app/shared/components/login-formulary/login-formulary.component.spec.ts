import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormularyComponent } from './login-formulary.component';

describe('LoginFormularyComponent', () => {
  let component: LoginFormularyComponent;
  let fixture: ComponentFixture<LoginFormularyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormularyComponent]
    });
    fixture = TestBed.createComponent(LoginFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
