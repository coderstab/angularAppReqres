import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { UserList } from '../_models/userList';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData, UserDataInfo } from '../_models';

const API_URL = 'https://reqres.in';
const url = 'https://reqres.in/api/users';
@Injectable({ providedIn: 'root' })
export class UserService {
    
users: User[];
usersList: UserList[];


    constructor(private http: HttpClient) {
       
     }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    public getUsers(url): Observable<any> {
        return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
      }


      public saveUser(userData: UserData): Observable<any> {
        return this.http.post<any>(url, userData);
      }
    
      public saveUserTyped(userData: UserData): Observable<UserDataInfo> {
        return this.http.post<UserDataInfo>(url, userData);
      }
      
      deleteById(id: number) {
        return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
    }
   
    
}