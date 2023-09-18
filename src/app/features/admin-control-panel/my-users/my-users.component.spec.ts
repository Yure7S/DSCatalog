import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUsersComponent } from './my-users.component';

describe('MyUsersComponent', () => {
  let component: MyUsersComponent;
  let fixture: ComponentFixture<MyUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyUsersComponent]
    });
    fixture = TestBed.createComponent(MyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
