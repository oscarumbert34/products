import { TestBed } from '@angular/core/testing';

import { ServiceProductsService } from './service-products.service';

describe('ServiceProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProductsService = TestBed.get(ServiceProductsService);
    expect(service).toBeTruthy();
  });
});
