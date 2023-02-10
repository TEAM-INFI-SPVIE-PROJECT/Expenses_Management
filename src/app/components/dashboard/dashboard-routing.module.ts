import { ReportersComponent } from './reporters/reporters.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitialComponent } from './initial/initial.component';
import { CreateUserComponent } from '../dashbord/user/create-user/create-user.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'', component: InitialComponent},
    {path:'user', component:UserComponent},
    {path:'reporters',component:ReportersComponent},
    {path:'create', component:CreateUserComponent},
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
