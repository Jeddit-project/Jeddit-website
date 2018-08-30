import { TestBed, inject } from '@angular/core/testing';

import { UserFeedService } from './user-feed.service';

describe('UserFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedService]
    });
  });

  it('should be created', inject([UserFeedService], (service: UserFeedService) => {
    expect(service).toBeTruthy();
  }));
});
