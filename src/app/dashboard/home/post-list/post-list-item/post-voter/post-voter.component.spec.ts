import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVoterComponent } from './post-voter.component';

describe('PostVoterComponent', () => {
  let component: PostVoterComponent;
  let fixture: ComponentFixture<PostVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
