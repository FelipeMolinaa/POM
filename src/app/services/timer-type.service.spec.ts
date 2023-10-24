import { TestBed } from '@angular/core/testing';

import { TimerTypeService } from './timer-type.service';

describe('TimerTypeService', () => {
  let service: TimerTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
