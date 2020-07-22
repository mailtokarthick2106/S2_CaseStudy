import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipatedFormComponent } from './participated-form/participated-form.component';
import { NotParticipatedFormComponent } from './not-participated-form/not-participated-form.component';
import { UnregisteredFormComponent } from './unregistered-form/unregistered-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'particpated/form', component: ParticipatedFormComponent },
    { path: 'notparticpated/form', component: NotParticipatedFormComponent },
    { path: 'unregistered/form', component: UnregisteredFormComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeedbackFormRoutingModule { }