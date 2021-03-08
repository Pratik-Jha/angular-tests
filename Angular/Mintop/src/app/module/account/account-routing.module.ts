import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectResponseGuard } from 'src/app/auth/redirect/redirect-response.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  { path: 'my-account', component: MyAccountComponent,canDeactivate:[RedirectResponseGuard]},
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  providers:[RedirectResponseGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
