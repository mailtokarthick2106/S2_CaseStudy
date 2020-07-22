import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { EVENT_REPORTS } from './../../../mock/event-reports';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  getEventReports(): Observable<any[]> {
    return Observable.of(EVENT_REPORTS);
  }
}
