import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardList01Component } from './card-list01.component';

describe('CardList01Component', () => {
  let component: CardList01Component;
  let fixture: ComponentFixture<CardList01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardList01Component]
    });
    fixture = TestBed.createComponent(CardList01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
