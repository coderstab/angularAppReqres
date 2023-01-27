import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserList } from '../_models/userList';
import { UserService } from '../_services';
import {SharedService} from '../_services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserData, UserDataInfo } from '../_models';




@Component({
  selector: 'app-admi-component',
  templateUrl: './admi-component.component.html',
  styleUrls: ['./admi-component.component.css']
})
export class AdmiComponentComponent implements AfterContentChecked {
  comp1Val: string;
  comp2Val: string;
  val:any;
id:any;
  loading = false;
  usersList: any[] = []  ;
  // dataSource : any[] = [];
  // users: User[] = [];
  gridColumns = 3;
  dataSourceWithPageSize: any;

  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
  ];

  dataSource = new MatTableDataSource<any>(this.usersList);
  @ViewChild(MatPaginator) paginator: MatPaginator;


   userData: UserData;
   usersData: UserData[] = [];
   usersTyped: UserDataInfo[] = [];

  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
  });





  constructor(private userService: UserService, private sharedService: SharedService) {  
    console.log(this.usersTyped);
    this.sharedService.comp2Val = "Notice Board Data";
  }

  saveUser() {
    this.userData = this.addUserForm.value;
    this.userService.saveUser(this.userData).subscribe((response: any) => {
      console.log(response);

      this.usersData.push({ name: response.name, job: response.job });
    });
  }

  saveUserTyped() {
    this.userData = this.addUserForm.value;
    this.userService
      .saveUserTyped(this.userData)
      .subscribe((response: UserDataInfo) => {
        console.log(response);
        this.usersData.push({ name: response.name, job: response.job });
        this.usersTyped.push({
          name: response.name,
          job: response.job,
          id: response.id,
          createdAt: response.createdAt,
        });
      });
  }

 

  

//   ngOnInit():void {

//     this.loading = true;
//         this.userService.getAll().pipe(first()).subscribe(users => {
//             this.loading = false;
//             this.users = users;
//             console.log('data response 1 ', this.users);
//         });

//         this.userService.getUsers('users?page=1').subscribe(res => {
//           this.usersList = res.data;
//           this.dataSource = res.data;
//           console.log('data response', this.usersList);
//       });


// }



ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}


//  getRandom Color
// getRandomColor() {
//   var color = Math.floor(0x1000000 * Math.random()).toString(16);
//   return '#' + ('000010' + color).slice(-6);
// }

ngAfterContentChecked() {
  this.comp1Val = this.sharedService.comp1Val;
}

addValue(str:String) {
  this.sharedService.updateComp2Val(str);
}


}
