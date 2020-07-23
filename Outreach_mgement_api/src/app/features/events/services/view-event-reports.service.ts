import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { VOLUNTER_STATISTICS } from './../../../mock/volunteering-statistics';
import { NOT_PARTICIPATED } from './../../../mock/not-participated-reason';
import { UNREGISTERED_REASON } from './../../../mock/unregistered-reason';
import { PARTICIPATED_RATING } from './../../../mock/participated-ratings';
import { EVENT_REPORTS } from './../../../mock/event-reports';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/config/app.config';
import { EventDetails } from '../model/event.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewEventReportsService {
  endpoint: any;
  appConfig: AppConfig

  constructor(private readonly http: HttpClient) {
    this.endpoint = AppConfig.getConfig();
  }
  getEventReports(): Observable<EventDetails[]> {
    //return this.http.get<any>(environment.apiUrl +this.endpoint.api.getOutreachEvents);
	return Observable.of(EVENT_REPORTS);
  }
  getEventDetailedInfo(eventId: string): Observable<EventDetails> {
    console.log(`${this.endpoint.api.getOutreachEvents}/${eventId}`);
    const r = this.http.get<any>(environment.apiUrl +`${this.endpoint.api.getOutreachEvents}/${eventId}`)
    console.log(r);
    return r;
  }
  getVolunteersStatistics(): Observable<any[]> {
    return Observable.of(VOLUNTER_STATISTICS);
  }

  getEventFeedbackDetails(eventId: string): any {
    console.log(`${this.endpoint.api.getEventFeedbackDetails}/${eventId}`);
    return this.http.get<any>(environment.apiUrl +`${this.endpoint.api.getEventFeedbackDetails}/${eventId}`)
  }
}
