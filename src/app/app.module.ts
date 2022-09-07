import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChargeComponent } from './charge/charge.component';
import { ContentComponent } from './content/content.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
// import { EditorModule } from '@progress/kendo-angular-editor';


const drawerRoutes = [
  {
    path: "",
    component: HomeComponent,
    text: "Home",
    icon: "k-i-home",
  },
  {
    path: "list",
    component: ListComponent,
    text: "List",
    icon: "k-i-menu",
  },
  {
    path: "charge",
    component: ChargeComponent,
    text: "Charge",
    icon: "k-i-dollar",
  },
  {
    path: "customer",
    component: CustomerComponent,
    text: "Customer Profile",
    icon: "k-i-user",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    ListComponent,
    ChargeComponent,
    CustomerComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    PDFModule,
    InputsModule,
    DropDownsModule,
    LayoutModule,
    ButtonsModule,
    ProgressBarModule,
    ExcelModule,
    LabelModule,
    FormsModule,
    DateInputsModule,
    RouterModule.forRoot(drawerRoutes),
    // EditorModule,
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: window.location.pathname,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
