import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListService } from './core/services/users/user-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MyAccountComponent } from './module/account/my-account/my-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './core/authguard.service';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedirectResponseGuard } from './auth/redirect/redirect-response.guard';
import { FormComponent } from './reactive_form/form/form.component';
import { DemoComponent } from './demo/demo.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationDetailsComponent } from './reactive_form/registration-details/registration-details.component';
import { DataService } from './core/services/fetchdata/data.service';
import { EncryptdecryptComponent } from './more/encryptdecrypt/encryptdecrypt.component';
import { ClipboardModule } from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FormComponent,
    DemoComponent,
    RegistrationDetailsComponent,
    EncryptdecryptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [
    UserListService,
    AuthguardService,
    RedirectResponseGuard,
    DataService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
