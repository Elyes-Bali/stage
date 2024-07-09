import { TestBed } from '@angular/core/testing';

import { MangerApiService } from './manger-api.service';

describe('MangerApiService', () => {
  let service: MangerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
