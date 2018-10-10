import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListSorterComponent } from './post-list-sorter.component';

describe('PostListSorterComponent', () => {
  let component: PostListSorterComponent;
  let fixture: ComponentFixture<PostListSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
