import { TestBed } from '@angular/core/testing';

import { HotDrinksService } from './hot-drinks.service';

describe('HotDrinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotDrinksService = TestBed.get(HotDrinksService);
    expect(service).toBeTruthy();
  });
});
