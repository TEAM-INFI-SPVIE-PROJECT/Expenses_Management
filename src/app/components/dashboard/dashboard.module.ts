import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShearedModule } from '../sheared/sheared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    StudentComponent,
    TeacherComponent,
    SupervisorComponent,
    SublevelMenuComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShearedModule,
    BrowserAnimationsModule,
  ]
})
export class DashboardModule { }
