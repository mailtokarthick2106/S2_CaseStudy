import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import {
  takeWhile, finalize, debounceTime, distinctUntilChanged, filter
} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Subject, timer } from 'rxjs';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

import { ViewEventReportsService } from './services/view-event-reports.service';
import { GridFilterPipe } from 'src/app/shared/pipes/GridFilterPipe.pipe';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventDetails } from './model/event.model';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
}) export class EventsComponent implements OnInit {
  queryString: any;
  searchText: any[];
  eventIdSearchString: string;
  monthSearchString: string;
  baseLocationSearchString: string;
  categorySearchString: string;
  beneficiaryNameSearchString: string;
  venueAddressSearchString: string;
  councilNameSearchString: string;
  projectSearchString: string;
  eventNameSearchString: string;
  eventDescriptionSearchString: string;
  eventDateSearchString: any;
  totalNoVolunteersSearchString: any;
  totalVolunteersHoursSearchString: any;
  totalTravelHoursSearchString: any;
  overallVolunteeringHoursSearchString: any;
  livesImpactedSearchString: any;
  activityTypeSearchString: any;
  statusSearchString: any;
  POCIDSearchString: any;
  POCNameSearchString: any;
  POCContactNumberSearchString: string;

  constructor(private readonly viewEventReportsService: ViewEventReportsService, private readonly changeDetector: ChangeDetectorRef
    , private readonly router: Router, private readonly activatedRoute: ActivatedRoute, private readonly formBuilder: FormBuilder, ) {
    this.userInputSearchSubject = new Subject<string>();

  }
  emitData: any;
  @ViewChild('downloadExcel', { static: false }) downloadExcel: ElementRef
  // @Output() sendRowData = new EventEmitter<any>();
  // @Input() set splitViewEmitOutput(abc: any) {
  //   this.emitData = abc;
  // }
  // @Output('splitPanelOpenData')
  // splitPanelOpenData = new EventEmitter<boolean>();
  elementRef: ElementRef;
  columns: string[];
  columnMap: string[];
  eventData: EventDetails[];
  filteredData: any[];
  userInputSearchSubject: Subject<string>;
  canSubscribe: boolean;
  searchString: string;
  rowData: any;
  isSplitPanelOpen: boolean;
  eventListForm: FormGroup;

  ngOnInit() {
    this.canSubscribe = true;
    this.isSplitPanelOpen = false;
    this.columnMap = ["eventId", "month", "baseLocation",
      "beneficiaryName",
      "venueAddress",
      "councilName",
      "project",
      "category",
      "eventName",
      "eventDescription",
      "eventDate",
      "totalNoVolunteers",
      "totalVolunteersHours",
      "totalTravelHours",
      "overallVolunteeringHours",
      "livesImpacted",
      "activityType",
      "status",
      "pocId",
      "pocName",
      "pocContactNumber"];
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
    this.filteredData = this.getEventReports();
    this.eventListForm = this.formBuilder.group({
      eventIdSearch: [''],
      monthSearch: [''],
      baseLocationSearch: [''],
      beneficiaryNameSearch: [''],
      venueAddressSearch: [''],
      councilNameSearch: [''],
      projectSearch: [''],
      categorySearch: [''],
      eventNameSearch: [''],
      eventDescriptionSearch: [''],
      eventDateSearch: [''],
      totalNoVolunteersSearch: [''],
      totalVolunteersHoursSearch: [''],
      totalTravelHoursSearch: [''],
      overallVolunteeringHoursSearch: [''],
      livesImpactedSearch: [''],
      activityTypeSearch: [''],
      statusSearch: [''],
      POCIDSearch: [''],
      POCNameSearch: [''],
      POCContactNumberSearch: ['']
    });

  }
  ngOnDestroy(): void {
    this.canSubscribe = false;
  }
  getEventReports(): EventDetails[] {
    this.viewEventReportsService.getEventReports()
      .pipe(takeWhile(() => this.canSubscribe),
        finalize(() => {
          // this.changeDetector.detectChanges();
        })).subscribe((data: EventDetails[]) => {
          console.log(data);
          if ((data)) {
            this.eventData = data;
          }
        },
          (error: Error) => {

          });
    console.log(this.eventData);
    return this.eventData;
  }

  onSearchChange() {
    this.userInputSearchSubject.next(this.eventListForm.value);
    this.searchInputListener();
  }

  searchInputListener() {

    this.userInputSearchSubject.pipe(debounceTime(30), distinctUntilChanged(),
      takeWhile(() => this.canSubscribe),
      finalize(() => {
        this.changeDetector.detectChanges();
      }))
      .subscribe(() => {
        this.eventData = [];
        if (this.eventListForm.controls.eventIdSearch.value.length > 0) {
          this.eventIdSearchString = this.formattedSearchdetails(this.eventListForm.controls.eventIdSearch.value);
          this.filteredData.forEach((item) => {
            if (item.EventID.includes(this.eventIdSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.monthSearch.value.length > 0) {
          this.monthSearchString = this.formattedSearchdetails(this.eventListForm.controls.monthSearch.value);
          this.filteredData.forEach((item) => {
            if (item.Month.includes(this.monthSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.baseLocationSearch.value.length > 0) {
          this.baseLocationSearchString = this.formattedSearchdetails(this.eventListForm.controls.baseLocationSearch.value);
          this.filteredData.forEach((item) => {
            if (item.BaseLocation.includes(this.baseLocationSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.beneficiaryNameSearch.value.length > 0) {
          this.beneficiaryNameSearchString = this.formattedSearchdetails(this.eventListForm.controls.beneficiaryNameSearch.value);
          this.filteredData.forEach((item) => {
            if (item.BeneficiaryName.includes(this.beneficiaryNameSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.venueAddressSearch.value.length > 0) {
          this.venueAddressSearchString = this.formattedSearchdetails(this.eventListForm.controls.venueAddressSearch.value);
          this.filteredData.forEach((item) => {
            if (item.VenueAddress.includes(this.venueAddressSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.councilNameSearch.value.length > 0) {
          this.councilNameSearchString = this.formattedSearchdetails(this.eventListForm.controls.councilNameSearch.value);
          this.filteredData.forEach((item) => {
            if (item.CouncilName.includes(this.councilNameSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.projectSearch.value.length > 0) {
          this.projectSearchString = this.formattedSearchdetails(this.eventListForm.controls.projectSearch.value);
          this.filteredData.forEach((item) => {
            if (item.Project.includes(this.projectSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.categorySearch.value.length > 0) {
          this.categorySearchString = this.formattedSearchdetails(this.eventListForm.controls.categorySearch.value);
          this.filteredData.forEach((item) => {
            if (item.Category.includes(this.categorySearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.eventNameSearch.value.length > 0) {
          this.eventNameSearchString = this.formattedSearchdetails(this.eventListForm.controls.eventNameSearch.value);
          this.filteredData.forEach((item) => {
            if (item.EventName.includes(this.eventNameSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.eventDescriptionSearch.value.length > 0) {
          this.eventDescriptionSearchString = this.formattedSearchdetails(this.eventListForm.controls.eventDescriptionSearch.value);
          this.filteredData.forEach((item) => {
            if (item.EventDescription.includes(this.eventDescriptionSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.eventDateSearch.value.length > 0) {
          this.eventDateSearchString = this.formattedSearchdetails(this.eventListForm.controls.eventDateSearch.value);
          this.filteredData.forEach((item) => {
            if (item.EventDate.includes(this.eventDateSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.totalNoVolunteersSearch.value.length > 0) {
          this.totalNoVolunteersSearchString = this.formattedSearchdetails(this.eventListForm.controls.totalNoVolunteersSearch.value);
          this.filteredData.forEach((item) => {
            if (item.TotalNoVolunteers.includes(this.totalNoVolunteersSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.totalVolunteersHoursSearch.value.length > 0) {
          this.totalVolunteersHoursSearchString = this.formattedSearchdetails(this.eventListForm.controls.totalVolunteersHoursSearch.value);
          this.filteredData.forEach((item) => {
            if (item.TotalVolunteersHours.includes(this.totalVolunteersHoursSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.totalTravelHoursSearch.value.length > 0) {
          this.totalTravelHoursSearchString = this.formattedSearchdetails(this.eventListForm.controls.totalTravelHoursSearch.value);
          this.filteredData.forEach((item) => {
            if (item.TotalTravelHours.includes(this.totalTravelHoursSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.overallVolunteeringHoursSearch.value.length > 0) {
          this.overallVolunteeringHoursSearchString = this.formattedSearchdetails(this.eventListForm.controls.overallVolunteeringHoursSearch.value);
          this.filteredData.forEach((item) => {
            if (item.OverallVolunteeringHours.includes(this.overallVolunteeringHoursSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.livesImpactedSearch.value.length > 0) {
          this.livesImpactedSearchString = this.formattedSearchdetails(this.eventListForm.controls.livesImpactedSearch.value);
          this.filteredData.forEach((item) => {
            if (item.LivesImpacted.includes(this.livesImpactedSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.activityTypeSearch.value.length > 0) {
          this.activityTypeSearchString = this.formattedSearchdetails(this.eventListForm.controls.activityTypeSearch.value);
          this.filteredData.forEach((item) => {
            if (item.ActivityType.includes(this.activityTypeSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.statusSearch.value.length > 0) {
          this.statusSearchString = this.formattedSearchdetails(this.eventListForm.controls.statusSearch.value);
          this.filteredData.forEach((item) => {
            if (item.Status.includes(this.statusSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.POCIDSearch.value.length > 0) {
          this.POCIDSearchString = this.formattedSearchdetails(this.eventListForm.controls.POCIDSearch.value);
          this.filteredData.forEach((item) => {
            if (item.POCID.includes(this.POCIDSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.POCNameSearch.value.length > 0) {
          this.POCNameSearchString = this.formattedSearchdetails(this.eventListForm.controls.POCNameSearch.value);
          this.filteredData.forEach((item) => {
            if (item.POCName.includes(this.POCNameSearchString)) {
              this.eventData.push(item);
            }
          });
        }
        if (this.eventListForm.controls.POCContactNumberSearch.value.length > 0) {
          this.POCContactNumberSearchString = this.formattedSearchdetails(this.eventListForm.controls.POCContactNumberSearch.value);
          this.filteredData.forEach((item) => {
            if (item.POCContactNumber.includes(this.POCContactNumberSearchString)) {
              this.eventData.push(item);
            }
          });
        }
      });
  }

  formattedSearchdetails(enteredValue: string) {
    const value = enteredValue.replace(/[[\]{}*:\-"~&!\/?\\^|]/g, '\\$&');
    const valueField = value.replace(/[(\))]/g, ' ');
    const valuePercent = valueField.replace(/[%]/g, ' \\%');
    return `${valuePercent.replace(/[\,.$]/g, '')}`;
  }

  exportToExcel() {
    let eventData = this.getEventReports();
    this.getxlsx(eventData);
  }
  downloadFile(data: any) {
    const fileName = `Event Reports ${moment().format('YYYY-MM-DD')} at ${moment().format('hh.mm.ss A')}.xlsx`;
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(data, fileName);
    } else {
      this.downloadExcel.nativeElement.href = URL.createObjectURL(new Blob(data, { type: "application/xlsx" }));
      this.downloadExcel.nativeElement.download = fileName;
      this.downloadExcel.nativeElement.click();
    }
  }

  getxlsx(excelReport: any[]) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(excelReport);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const fileName = `Event Reports ${moment().format('YYYY-MM-DD')} at ${moment().format('hh.mm.ss A')}.xlsx`;
    const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName);
  }
  onRowSelect(event: any) {
    debugger;
    this.isSplitPanelOpen = true;
    this.router.navigate(['/events/viewdetails'],
      {
        queryParams: {
          eventId: event['eventId']
        }
      });

  }
  onSendMail() {
    this.router.navigate(['/send-email']);
  }
  onClearFilters() {

  }

}
