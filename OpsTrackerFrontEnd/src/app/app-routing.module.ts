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
import {EmplyeeviewComponent} from './emplyeeview/emplyeeview.component';
import {ClientviewComponent} from './clientview/clientview.component';
import {SiteviewComponent} from './siteview/siteview.component';
import {EscalationviewComponent} from './escalationview/escalationview.component';
import { EscalationtrackerviewComponent } from './escalationtrackerview/escalationtrackerview.component';
import {OpsmachinetransactionComponent} from './opsmachinetransaction/opsmachinetransaction.component';
import {OpsmaterialtransactionComponent} from './opsmaterialtransaction/opsmaterialtransaction.component';
import {OpsmanpowertransactionComponent} from './opsmanpowertransaction/opsmanpowertransaction.component';
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
},
{
path: 'emplyeeview',
  component : EmplyeeviewComponent
},
{
path: 'clientview',
  component : ClientviewComponent
},
{
path: 'siteview',
  component : SiteviewComponent
},
{
path: 'escalationview',
  component : EscalationviewComponent
},
{
path: 'EscalationtrackerComponent',
  component : EscalationtrackerviewComponent
},
{
path: 'opsmachinetransactionview',
  component : OpsmachinetransactionComponent
},
{
  path: 'opsmaterialtransactionview',
    component : OpsmaterialtransactionComponent
  }
  ,
{
  path: 'opsmanpowertransactionview',
    component : OpsmanpowertransactionComponent
  },



];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
}
  )


export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [EscalationComponent, ReportComponent, OpstrackerComponent, MasterdataComponent , LoginComponent , MasterviewComponent, EmplyeeviewComponent, ClientviewComponent, SiteviewComponent, EscalationviewComponent ,OpsmachinetransactionComponent,OpsmaterialtransactionComponent,OpsmanpowertransactionComponent ];
