import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AdmiComponentComponent } from './admi-component/admi-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MaterialModule } from './material.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { fakeBackendProvider } from './_helpers';
import { SharedService } from './_services';
import { DataPageComponent } from './data-page/data-page.component';
// import {CustomDatePipe} from './customPipe/customDate.pipe'
// import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AdmiComponentComponent,
    HomeComponentComponent,
    DataPageComponent,
    // CustomDatePipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    SharedService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
