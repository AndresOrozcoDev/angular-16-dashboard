import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SupermarketsService } from './supermarkets.service';
import { HttpClientModule } from '@angular/common/http';

describe('SupermarketsService', () => {
  let service: SupermarketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [SupermarketsService]
    });
    service = TestBed.inject(SupermarketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
