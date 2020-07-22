import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeWhile, finalize } from 'rxjs/operators';
import { ConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'app-feedback-questions',
  templateUrl: './feedback-questions.component.html',
  styleUrls: ['./feedback-questions.component.scss']
})
export class FeedbackQuestionsComponent implements OnInit {
  columns: string[];
  canSubscribe: boolean;
  feedbackQuestions: any[];
  constructor(private readonly configurationService: ConfigurationService, private readonly changeDetector: ChangeDetectorRef) { }
  ngOnInit() {
    this.canSubscribe = true;
    this.columns = ["Question",
      "Total Answers",
      "Feedback Type"];
    this.getFeedBackQuestions();
  }
  getFeedBackQuestions(): any[] {
    this.configurationService.getFeedBackQuestions()
      .pipe(takeWhile(() => this.canSubscribe), finalize(() => {
        this.changeDetector.detectChanges();
      })).subscribe((data: any) => {
        if (data) {
          this.feedbackQuestions = data;
        }
      }, (error: Error) => {
      });
    console.log(this.feedbackQuestions);
    return this.feedbackQuestions;
  }
}
