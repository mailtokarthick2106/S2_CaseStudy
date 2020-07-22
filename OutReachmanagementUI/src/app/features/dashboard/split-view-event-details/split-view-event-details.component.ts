import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-split-view-event-details',
  templateUrl: './split-view-event-details.component.html',
  styleUrls: ['./split-view-event-details.component.scss']
})
export class SplitViewEventDetailsComponent implements OnInit {
  eventDetails: any;
  columns: string[];

  @Input() set sendRowData(eventRowDetails) {

    // this.columns = ['EventDate', 'BUSINESS UNIT', 'VenueAddress', 'Status', 'TotalNoVolunteers', 'TotalVolunteersHours', 'TotalTravelHours'];

    this.eventDetails = eventRowDetails;
    console.log('eventDetails', this.eventDetails);
  }

  @Output() splitViewEmitOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.columns = ["EventID", "Month", "BaseLocation",
      "BeneficiaryName",
      "VenueAddress",
      "CouncilName",
      "Project",
      "Category",
      "EventName",
      "EventDescription",
      "EventDate",
      "TotalNoVolunteers",
      "TotalVolunteersHours",
      "TotalTravelHours",
      "OverallVolunteeringHours",
      "LivesImpacted",
      "ActivityType",
      "Status",
      "POCID",
      "POCName",
      "POCContactNumber"];
    this.splitViewEmitOutput.emit(this.eventDetails);
  }

}
