import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShearedModule } from '../sheared/sheared.module';
import { ReportersComponent } from './reporters/reporters.component';
import { InitialComponent } from './initial/initial.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ReportersComponent,
    InitialComponent ,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShearedModule
  ]
})
export class DashboardModule { }
