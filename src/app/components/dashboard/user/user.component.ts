import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';


export interface User {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    listUsers: User[] = [];
    displayedColumns: string[] = ["user","nombre","nom", "sexe","actions"];
    dataSource = new MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private _userService: UserService,private _snackBar:MatSnackBar) {}

ngOnInit(): void {

}

cargarUser(){
  this.listUsers = this._userService.getUser();
  this.dataSource = new MatTableDataSource(this.listUsers)
}

ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

deleteUser(index: number){
    console.log(index);

    this._userService.deleteUser(index);
    this.cargarUser();


    this._snackBar.open('elimination ','', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition:'bottom',
    });
}
}
