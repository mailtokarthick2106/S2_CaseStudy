import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormRoutingModule } from './feedback-form-routing.moule';
import { UnregisteredFormComponent } from './unregistered-form/unregistered-form.component';
import { ParticipatedFormComponent } from './participated-form/participated-form.component';
import { NotParticipatedFormComponent } from './not-participated-form/not-participated-form.component';



@NgModule({
  declarations: [UnregisteredFormComponent, ParticipatedFormComponent, NotParticipatedFormComponent],
  imports: [
    CommonModule
  ],
  exports: [FeedbackFormRoutingModule]
})
export class FeedbackFormsModule { }
