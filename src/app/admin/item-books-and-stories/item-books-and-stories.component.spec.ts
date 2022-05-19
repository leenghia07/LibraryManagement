import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBooksAndStoriesComponent } from './item-books-and-stories.component';

describe('ItemBooksAndStoriesComponent', () => {
  let component: ItemBooksAndStoriesComponent;
  let fixture: ComponentFixture<ItemBooksAndStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBooksAndStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBooksAndStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
