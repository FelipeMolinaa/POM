import { TestBed } from '@angular/core/testing';

import { ListControllService } from './list-controll.service';

describe('ListControllService', () => {
  let service: ListControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
