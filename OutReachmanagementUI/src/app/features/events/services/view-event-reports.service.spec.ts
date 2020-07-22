import { TestBed } from '@angular/core/testing';

import { ViewEventReportsService } from './view-event-reports.service';

describe('ViewEventReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewEventReportsService = TestBed.get(ViewEventReportsService);
    expect(service).toBeTruthy();
  });
});
