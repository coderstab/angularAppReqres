import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AdmiComponentComponent } from './admi-component/admi-component.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

// const usersModule = () => import('./components/user/users.module').then(x => x.UsersModule);

const routes: Routes = [
  // update
 
  // { path: 'users', loadChildren: usersModule },

  {
    path: '',
    component: HomeComponentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponentComponent,
  },
  {
    path: 'admin',
    component: AdmiComponentComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin]}
    
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
     // otherwise redirect to home
     path: '**', redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
