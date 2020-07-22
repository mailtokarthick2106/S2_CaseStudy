import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeWhile, finalize } from 'rxjs/operators';
import { ConfigurationService } from '../services/configuration.service';
@Component({
  selector: 'app-config-poc',
  templateUrl: './config-poc.component.html',
  styleUrls: ['./config-poc.component.scss']
})
export class ConfigPocComponent implements OnInit {
  columns: string[];
  canSubscribe: boolean;
  pocDetails: any[];
  constructor(private readonly configurationService: ConfigurationService, private readonly changeDetector: ChangeDetectorRef) { }
  ngOnInit() {
    this.canSubscribe = true;
    this.columns = ["EMPLOYEE ID",
      "NAME",
      "CONTACT NUMBER"];
      this.getPOCDetails();
  }
  getPOCDetails(): any[] {
    this.configurationService.getPOCDetails()
      .pipe(takeWhile(() => this.canSubscribe), finalize(() => {
        this.changeDetector.detectChanges();
      })).subscribe((data: any) => {
        if (data) {
          this.pocDetails = data;
        }
      }, (error: Error) => {
      });
    console.log(this.pocDetails);
    return this.pocDetails;
  }
}
