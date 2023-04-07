import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShearedModule } from './components/sheared/sheared.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShearedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
