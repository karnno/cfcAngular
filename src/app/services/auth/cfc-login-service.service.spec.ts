import { TestBed, inject } from '@angular/core/testing';

import { CfcLoginServiceService } from './cfc-login-service.service';

describe('CfcLoginServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CfcLoginServiceService]
    });
  });

  it('should be created', inject([CfcLoginServiceService], (service: CfcLoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
