import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeWhile, finalize, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ConfigurationService } from '../services/configuration.service';
@Component({
  selector: 'app-config-pmo',
  templateUrl: './config-pmo.component.html',
  styleUrls: ['./config-pmo.component.scss']
})
export class ConfigPmoComponent implements OnInit {

  columns: string[];
  pmoDetailsData: any[];
  filteredData: any[];

  canSubscribe: boolean;
  searchString: string;
  constructor(private readonly configurationService: ConfigurationService, private readonly changeDetector: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.canSubscribe = true;
    this.columns = ["EmailAddress",
      "FirstName",
      "LastName"];
    this.filteredData = this.getPMODetails();
  }
  ngOnDestroy(): void {
    this.canSubscribe = false;
  }
  getPMODetails(): any[] {
    this.configurationService.getPMODetails()
      .pipe(takeWhile(() => this.canSubscribe),
        finalize(() => {
          this.changeDetector.detectChanges();
        })).subscribe((data: any) => {
          if (data) {
            this.pmoDetailsData = data;
          }
        },
          (error: Error) => {

          });
    console.log(this.pmoDetailsData);
    return this.pmoDetailsData;
  }

}
