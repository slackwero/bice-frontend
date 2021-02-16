import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../auth/login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HackernewsComponent } from '../pages/hackernews/hackernews.component';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [

  { 
    path: 'dashboard', 
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'hackernews', component: HackernewsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( routes )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
