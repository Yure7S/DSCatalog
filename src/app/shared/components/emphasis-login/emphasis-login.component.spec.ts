import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphasisLoginComponent } from './emphasis-login.component';

describe('EmphasisLoginComponent', () => {
  let component: EmphasisLoginComponent;
  let fixture: ComponentFixture<EmphasisLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmphasisLoginComponent]
    });
    fixture = TestBed.createComponent(EmphasisLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
