import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PMO_Details } from './../../../mock/pmo-details';
import { POC_DETAILS } from 'src/app/mock/poc-details';
import { FEEDBACK_QUESTIONS } from 'src/app/mock/feedback-questions';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  getPMODetails() {
    return Observable.of(PMO_Details);
  }
  getPOCDetails() {
    return Observable.of(POC_DETAILS);
  }
  getFeedBackQuestions() {
    return Observable.of(FEEDBACK_QUESTIONS);
  }
}
