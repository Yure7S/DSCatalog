import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCard01Component } from './category-card01.component';

describe('CategoryCard01Component', () => {
  let component: CategoryCard01Component;
  let fixture: ComponentFixture<CategoryCard01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCard01Component]
    });
    fixture = TestBed.createComponent(CategoryCard01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
