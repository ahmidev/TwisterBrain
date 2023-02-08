import { TestBed } from '@angular/core/testing';

import { ConfettisService } from './confettis.service';

describe('ConfettisService', () => {
  let service: ConfettisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfettisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
