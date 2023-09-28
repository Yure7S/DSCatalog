import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverFormComponent } from './recover-form.component';

describe('RecoverFormComponent', () => {
  let component: RecoverFormComponent;
  let fixture: ComponentFixture<RecoverFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverFormComponent]
    });
    fixture = TestBed.createComponent(RecoverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
