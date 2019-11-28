import { TestBed } from '@angular/core/testing';

import { AbstractResourceService } from './abstract-resource.service';

describe('AbstractDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractResourceService = TestBed.get(AbstractResourceService);
    expect(service).toBeTruthy();
  });
});
