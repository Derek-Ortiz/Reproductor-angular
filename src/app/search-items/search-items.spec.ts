import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItems } from './search-items';

describe('SearchItems', () => {
  let component: SearchItems;
  let fixture: ComponentFixture<SearchItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
