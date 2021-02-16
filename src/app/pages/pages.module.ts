import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../routes/app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HackernewsComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    HackernewsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
