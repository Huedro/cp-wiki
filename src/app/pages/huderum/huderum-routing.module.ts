import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuderumOverviewComponent } from './huderum-overview/huderum-overview.component';

const routes: Routes = [
  {path: 'huderum-overview', component : HuderumOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuderumRoutingModule { }
