import { TestBed, inject } from '@angular/core/testing';

import { SearchWikiService } from './search-wiki.service';

describe('SearchWikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchWikiService]
    });
  });

  it('should ...', inject([SearchWikiService], (service: SearchWikiService) => {
    expect(service).toBeTruthy();
  }));
});
