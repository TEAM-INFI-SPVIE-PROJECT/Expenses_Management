import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenses';
  isSideNavCollapsed = false;
  screenwidth = 0;

 onToggleSideNav(data: any): void{
    this.screenwidth = data.screenWidth;
   this.isSideNavCollapsed = data.collapsed;
 }
}
