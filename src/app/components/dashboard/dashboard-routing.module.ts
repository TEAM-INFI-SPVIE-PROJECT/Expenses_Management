
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SidenavComponent } from './sidenav/sidenav.component';



const routes: Routes = [
  {path:'',component: SidenavComponent,children:[
  {path:'',component: DashboardComponent },
  {path:'student',component:StudentComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'Supervisor',component:SupervisorComponent},
  {path:'Statistics',component:StatisticsComponent},
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
