import { TestBed } from '@angular/core/testing';

import { GithubserviceService } from './githubservice.service';

describe('GithubserviceService', () => {
  let service: GithubserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
