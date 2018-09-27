import { TestBed, inject } from '@angular/core/testing';

import { SubjedditRulesService } from './subjeddit-rules.service';

describe('SubjedditRulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjedditRulesService]
    });
  });

  it('should be created', inject([SubjedditRulesService], (service: SubjedditRulesService) => {
    expect(service).toBeTruthy();
  }));
});
