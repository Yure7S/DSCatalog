import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCard02Component } from './category-card02.component';

describe('CategoryCard02Component', () => {
  let component: CategoryCard02Component;
  let fixture: ComponentFixture<CategoryCard02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCard02Component]
    });
    fixture = TestBed.createComponent(CategoryCard02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
