import { TestBed } from '@angular/core/testing';

import { SetTopPageService } from './set-top-page.service';

describe('SetTopPageService', () => {
  let service: SetTopPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTopPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
