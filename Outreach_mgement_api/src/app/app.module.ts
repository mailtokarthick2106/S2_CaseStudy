import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { DashboardService } from './features/dashboard/services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsComponent } from './features/alerts/alerts.component';
import { EventsComponent } from './features/events/events.component';
import { ReportsComponent } from './features/reports/reports.component';
import { ConfigurationModule } from './features/configuration/configuration.module';
import { FeedbackFormsModule } from './features/feedback-forms/feedback-forms.module';
import { LoginService } from './features/login/services/login.service';
import { ConfigurationService } from './features/configuration/services/configuration.service';
import { ViewEventDetailsComponent } from './features/events/view-event-details/view-event-details.component';
import { SendEmailComponent } from './features/send-email/send-email.component';
import { InboxComponent } from './features/inbox/inbox.component';
import { SplitViewEventDetailsComponent } from './features/dashboard/split-view-event-details/split-view-event-details.component';
import { LocalStorageService } from './shared/local-storage-service.service';
import { CreateFeedbackFormsComponent } from './features/create-feedback-forms/create-feedback-forms.component';
import { FeedbackFormRoutingModule } from './features/feedback-forms/feedback-form-routing.moule';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { GridFilterPipe } from './shared/pipes/GridFilterPipe.pipe';
@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    AlertsComponent,
    EventsComponent,
    ReportsComponent,
    ViewEventDetailsComponent,
    SendEmailComponent,
    InboxComponent,
    SplitViewEventDetailsComponent,
    CreateFeedbackFormsComponent,
    GridFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    StorageServiceModule,
    ConfigurationModule,
    FeedbackFormsModule,
    FeedbackFormRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DashboardService, LoginService, ConfigurationService, LocalStorageService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
