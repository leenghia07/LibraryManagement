import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBooksAndStoriesComponent } from './create-books-and-stories.component';

describe('CreateBooksAndStoriesComponent', () => {
  let component: CreateBooksAndStoriesComponent;
  let fixture: ComponentFixture<CreateBooksAndStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBooksAndStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBooksAndStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
