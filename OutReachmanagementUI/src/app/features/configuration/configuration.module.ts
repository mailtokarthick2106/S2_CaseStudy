import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigAdminComponent } from './config-admin/config-admin.component';
import { ConfigPmoComponent } from './config-pmo/config-pmo.component';
import { ConfigPocComponent } from './config-poc/config-poc.component';
import { ConfigurationService } from './services/configuration.service';
import { FeedbackQuestionsComponent } from './feedback-questions/feedback-questions.component';



@NgModule({
  declarations: [ConfigAdminComponent, ConfigPmoComponent, ConfigPocComponent, FeedbackQuestionsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ConfigPocComponent
  ],
  providers: [ConfigurationService]
})
export class ConfigurationModule { }
