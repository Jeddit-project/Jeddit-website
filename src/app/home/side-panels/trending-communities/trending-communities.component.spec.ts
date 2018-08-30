import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCommunitiesComponent } from './trending-communities.component';

describe('TrendingCommunitiesComponent', () => {
  let component: TrendingCommunitiesComponent;
  let fixture: ComponentFixture<TrendingCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
