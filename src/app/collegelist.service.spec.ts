import { TestBed } from '@angular/core/testing';

import { CollegelistService } from './collegelist.service';

describe('CollegelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegelistService = TestBed.get(CollegelistService);
    expect(service).toBeTruthy();
  });
});
