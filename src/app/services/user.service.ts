import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUsers: any[] = [
    {User: "bahalainsei@gmail.com", nombre:"Alain", nom:"Sei", sexe: "Masculin"},
    {User: "gogbe@gmail.com", nombre:"Frederic", nom:"Gogbe", sexe:"Masculin"},
    {User:"seryvalentine@gmail.com", nombre:"Valentine", nom:"Sery", sexe:"Feminin"},
    {User:"Douasahiruth@gmail.com", nombre:"Ruth", nom:"Doua Sahi", sexe:"Feminin"},
    {User:"Kouamébiniouaelisabeth@gmail.com", nombre:"Elisabeth",nom:"Kouamé", sexe:"Feminin"},
    {User:"kouadavalantin@gmail.com", nombre:"Valantin",nom:"Kouada", sexe:"Masculin"},

  ];
  constructor() { }

  getUser(){
      return this.listUsers.slice();
  }

  deleteUser(index: number){
    this.listUsers.splice(index,1);
  }
}
