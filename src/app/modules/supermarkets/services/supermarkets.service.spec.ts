import { TestBed } from '@angular/core/testing';

import { SupermarketsService } from './supermarkets.service';

describe('SupermarketsService', () => {
  let service: SupermarketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupermarketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
