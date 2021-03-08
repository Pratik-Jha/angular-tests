import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedirectResponseGuard } from './auth/redirect/redirect-response.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';
import { FormComponent } from './reactive_form/form/form.component';
import { DemoComponent } from './demo/demo.component';
import { RegistrationDetailsComponent } from './reactive_form/registration-details/registration-details.component';
import { EncryptdecryptComponent } from './more/encryptdecrypt/encryptdecrypt.component';


const routes: Routes = [
  { path: "", component: HomeComponent, canDeactivate: [RedirectResponseGuard] },
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule), },
  { path: 'product', loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule)},
  { path: 'account', loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule)},
  { path: 'acuser', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule), canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  // { path: 'demo', component: DemoComponent },
  { path: 'form', component: FormComponent },
  { path: 'registration', component: RegistrationDetailsComponent },
  { path: 'encryptdecrypt', component: EncryptdecryptComponent },
  { path: ':', component: PageNotFoundComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  providers: [RedirectResponseGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
