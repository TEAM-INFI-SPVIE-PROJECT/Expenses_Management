import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      form!: FormGroup;
      loading!: true;
      constructor(private fb: FormBuilder,private _snackBar:MatSnackBar, private router: Router){
          this.form = this.fb.group({
            User:['',Validators.required],
            Password:['',Validators.required]
          })
      }

ngOnInit(): void {

}

Enter(){
  console.log(this.form);
  const User= this.form.value.User;
  const Password= this.form.value.Password;

  if(User== 'azerty' && Password == 'admin225'){
    this.router.navigate(['dashboard']);

  }else{
      this.error();
      this.form.reset();
  }

}
error(){
    this._snackBar.open('Cannonball!!', 'Splash', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom',
    });
};

fakeLoading(){
  this.loading = true;
  setTimeout(()=>{
    this.router.navigate(['dashboard']);
  },1500);
}

}


