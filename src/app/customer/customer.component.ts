import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabPosition } from '@progress/kendo-angular-layout/tabstrip/models/tab-position';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service: ProductService, router: Router) {
  }

  ngOnInit(): void {
  }

  public charge: Array<string> = [
    "A",
    "B",
    "C"
  ];

  public price: Array<string> = [
    "$200",
    "$400",
    "$600"
  ];

  public country: Array<string> = [
    "IND",
    "BRI",
    "USA"
  ];

  public chargeoffering: Array<string> = [
    "$200",
    "$400",
    "$600"
  ];

  // public position: TabPosition = "top";
  public position1: TabPosition = "top";
  public position2: TabPosition = "top";

  isShown : boolean = false;

  chkBox(){
    // console.log(event)
  this.isShown = !this.isShown;
  }


}

