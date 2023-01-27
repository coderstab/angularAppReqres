import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserList } from '../_models/userList';
import { AuthenticationService, UserService } from '../_services';
import { SharedService } from "../_services";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent  {
 
  usersList: any[] =[]  ;
  gridColumns = 3;
  loading = false;
  user: User;
  userFromApi: User;
  comp2Val: string;
  wcDatadt: any;

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private authenticationService: AuthenticationService
    ) { 
    this.user = this.authenticationService.userValue;
  }

  ngOnInit(){

    this.loading = true;
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });


        // DataUsers

        this.userService.getUsers('users?page=1').subscribe(res => {
          this.usersList = res.data;
          console.log('data response', this.usersList);
   
  });
}

//  getRandom Color
getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000010' + color).slice(-6);
}

ngAfterContentChecked() {
  this.comp2Val = this.sharedService.comp2Val;
  localStorage.setItem('wcData', JSON.stringify(this.comp2Val));
  this.wcDatadt = localStorage.getItem('wcData');
  console.log( this.wcDatadt)
}

isValid(str: String) {
  return typeof str !== 'undefined';
}

}
