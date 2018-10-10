import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListSorterComponent } from './comment-list-sorter.component';

describe('CommentListSorterComponent', () => {
  let component: CommentListSorterComponent;
  let fixture: ComponentFixture<CommentListSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
