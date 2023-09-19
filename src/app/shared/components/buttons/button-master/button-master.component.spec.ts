import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMasterComponent } from './button-master.component';

describe('ButtonMasterComponent', () => {
  let component: ButtonMasterComponent;
  let fixture: ComponentFixture<ButtonMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMasterComponent]
    });
    fixture = TestBed.createComponent(ButtonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
