import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {EscalationComponent} from './escalation/escalation.component';
import {OpstrackerComponent} from './opstracker/opstracker.component';
import {MasterdataComponent} from './masterdata/masterdata.component';
import {ReportComponent} from './report/report.component';
import {SiteComponent} from './site/site.component';
import {LoginComponent} from './login/login.component';
import {MasterviewComponent} from './masterview/masterview.component';

const routes: Routes = [
{
  path: 'masterdata',
  component : MasterdataComponent
},
{
  path: 'escalation',
  component : EscalationComponent
},
{
  path: 'opstracker',
  component : OpstrackerComponent
},
{
  path: 'report',
  component : ReportComponent
},
{
  path: '',
  component : LoginComponent
},
{
path: 'masterview',
  component : MasterviewComponent
}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
}
  )


export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [EscalationComponent, ReportComponent, OpstrackerComponent, MasterdataComponent , LoginComponent , MasterviewComponent ];
