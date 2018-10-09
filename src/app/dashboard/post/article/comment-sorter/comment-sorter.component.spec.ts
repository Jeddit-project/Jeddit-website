import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSorterComponent } from './comment-sorter.component';

describe('CommentSorterComponent', () => {
  let component: CommentSorterComponent;
  let fixture: ComponentFixture<CommentSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
