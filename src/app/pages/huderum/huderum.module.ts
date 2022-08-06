import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuderumRoutingModule } from './huderum-routing.module';
import { HuderumOverviewComponent } from './huderum-overview/huderum-overview.component';


@NgModule({
  declarations: [
    HuderumOverviewComponent
  ],
  imports: [
    CommonModule,
    HuderumRoutingModule
  ]
})
export class HuderumModule { }
