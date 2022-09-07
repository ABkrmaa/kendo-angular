import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeComponent } from './charge/charge.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'charge', component: ChargeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
