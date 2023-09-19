import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button02Component } from './button02.component';

describe('Button02Component', () => {
  let component: Button02Component;
  let fixture: ComponentFixture<Button02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button02Component]
    });
    fixture = TestBed.createComponent(Button02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
