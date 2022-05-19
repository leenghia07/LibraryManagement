import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksAndStoriesComponent } from './list-books-and-stories.component';

describe('ListBooksAndStoriesComponent', () => {
  let component: ListBooksAndStoriesComponent;
  let fixture: ComponentFixture<ListBooksAndStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksAndStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksAndStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
