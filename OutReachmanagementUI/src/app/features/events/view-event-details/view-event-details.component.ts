import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ViewEventReportsService } from '../services/view-event-reports.service';
import { takeWhile, finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { EventDetails } from '../model/event.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-event-details',
  templateUrl: './view-event-details.component.html',
  styleUrls: ['./view-event-details.component.scss']
})
export class ViewEventDetailsComponent implements OnInit {
  canSubscribe: boolean;
  volunteeringStatistics: any[];
  statisticsColumns: string[] = ["AVERAGE RATING",
    "VOLUNTEERS",
    "VOLUNTEERS HOURS",
    "OVERALL HOURS",
    "TRAVEL  HOURS",
    "LIVES IMPACTED"];
  statisticsKeys: string[] = ["averageRating",
    "totalNoVolunteers",
    "totalVolunteersHours",
    "overallVolunteeringHours",
    "totalTravelHours",
    "livesImpacted"];
  unregisteredReasons: any[];
  pocColumns: any[] = ["EMPLOYEE ID",
    "NAME",
    "CONTACT NUMBER"];
  notParticipatedReasons: any[];
  participatedRatings: any[];
  eventFeedbackDetails: any[];
  unregisteredColumns: string[] = ["reason"];
  unregisteredKeys: string[] = ["unregisteredReason"];
  notParticipatedKeys: string[] = ["notParticipatedReason"];
  particpatedRatingColumns: string[] = ["Ratings", "Likes", "DisLikes"];
  particpatedRatingKeys: string[] = ["rating", "likes", "dislikes"];
  pocKeys: string[] = ["pocId", "pocName", "pocContactNumber"];
  eventId: string;
  eventDetails: EventDetails;
  constructor(private readonly viewEventReportsService: ViewEventReportsService,
    private readonly changeDetector: ChangeDetectorRef, private readonly route: Router, private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((routeParams) => {
      this.eventId = routeParams.eventId;
    });
    this.canSubscribe = true;


    this.getEventDetailedInfo(this.eventId);
    this.getEventFeedbackDetails(this.eventId);
    // this.getVolunteersStatistics();
  }

  getEventDetailedInfo(eventId: string): EventDetails {
    debugger;
    this.viewEventReportsService.getEventDetailedInfo(eventId).pipe(takeWhile(() => this.canSubscribe), finalize(() => {
      this.changeDetector.detectChanges();
    })).subscribe((data: any) => {
      if (data) {
        this.eventDetails = data;
        console.log(this.eventDetails);
      }
    }, (error: Error) => { });
    return this.eventDetails;
  }

  getEventFeedbackDetails(eventId: string) {
    debugger;
    this.viewEventReportsService.getEventFeedbackDetails(eventId).pipe(takeWhile(() => this.canSubscribe), finalize(() => {
      this.changeDetector.detectChanges();
    })).subscribe((data: any) => {
      if (data) {
        this.participatedRatings = _.filter(data, { 'feedbackType': 'Participated' });
        this.notParticipatedReasons = _.filter(data, { 'feedbackType': 'NotParticipated' });
        this.unregisteredReasons = _.filter(data, { 'feedbackType': 'Unregistered' });
      }
    }, (error: Error) => { });
  }


  // getVolunteersStatistics() {
  //   this.viewEventReportsService.getVolunteersStatistics()
  //     .pipe(takeWhile(() => this.canSubscribe),
  //       finalize(() => {
  //         this.changeDetector.detectChanges();
  //       })).subscribe((data: any) => {
  //         if (data) {
  //           this.volunteeringStatistics = data;
  //         }
  //       },
  //         (error: Error) => {

  //         });

  //   return this.volunteeringStatistics;
  // }
  // getUnregisteredResons(): any[] {
  //   this.viewEventReportsService.getUnregisteredReasons().pipe(takeWhile(() => this.canSubscribe), finalize(() => {
  //     this.changeDetector.detectChanges();
  //   })).subscribe((data: any) => {
  //     if (data) {
  //       this.unregisteredReasons = data;
  //     }
  //   }, (error: Error) => { });
  //   console.log(this.unregisteredReasons);
  //   return this.unregisteredReasons;
  // }
  // getNotParticpatedReasons(): any[] {
  //   this.viewEventReportsService.getUnParticipatedReasons().pipe(takeWhile(() => this.canSubscribe), finalize(() => {
  //     this.changeDetector.detectChanges();
  //   })).subscribe((data: any) => {
  //     if (data) {
  //       this.notParticipatedReasons = data;
  //     }
  //   }, (error: Error) => { });
  //   console.log(this.notParticipatedReasons);
  //   return this.notParticipatedReasons;
  // }
  // getParticpatedRatings(): any[] {
  //   this.viewEventReportsService.getParticipatedRatings().pipe(takeWhile(() => this.canSubscribe), finalize(() => {
  //     this.changeDetector.detectChanges();
  //   })).subscribe((data: any) => {
  //     if (data) {
  //       this.participatedRatings = data;
  //     }
  //   }, (error: Error) => { });
  //   console.log(this.participatedRatings);
  //   return this.participatedRatings;
  // }


}


