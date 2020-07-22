import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AlertsComponent } from './features/alerts/alerts.component';
import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';
import { ConfigPmoComponent } from './features/configuration/config-pmo/config-pmo.component';
import { EventsComponent } from './features/events/events.component';
import { InboxComponent } from './features/inbox/inbox.component';
import { SendEmailComponent } from './features/send-email/send-email.component';
import { ViewEventDetailsComponent } from './features/events/view-event-details/view-event-details.component';
import { CreateFeedbackFormsComponent } from './features/create-feedback-forms/create-feedback-forms.component';
import { FeedbackQuestionsComponent } from './features/configuration/feedback-questions/feedback-questions.component';
import { FeedbackFormRoutingModule } from './features/feedback-forms/feedback-form-routing.moule';
import { ParticipatedFormComponent } from './features/feedback-forms/participated-form/participated-form.component';
import { NotParticipatedFormComponent } from './features/feedback-forms/not-participated-form/not-participated-form.component';
import { UnregisteredFormComponent } from './features/feedback-forms/unregistered-form/unregistered-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'config/pmo', component: ConfigPmoComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/viewdetails', component: ViewEventDetailsComponent },
  { path: 'reports', component: EventsComponent },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'create/forms', component: CreateFeedbackFormsComponent },
  { path: 'feedback/questions', component: FeedbackQuestionsComponent },
  { path: 'particpated/form', component: ParticipatedFormComponent },
  { path: 'notparticpated/form', component: NotParticipatedFormComponent },
  { path: 'unregistered/form', component: UnregisteredFormComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes), FeedbackFormRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
