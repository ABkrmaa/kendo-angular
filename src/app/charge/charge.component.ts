import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { categories } from '../data.categories';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {

  constructor(private service: ProductService, router: Router) {
    this.loadGridItems();
  }

  ngOnInit(): void {
  }

  // used for the DropDownList
public dropDownItems = categories;
public defaultItem = { text: 'Filter by Category', value: null };

 // used for the Grid
 public gridItems!: Observable<GridDataResult>;
 public pageSize: number = 10;
 public skip: number = 0;
 public sortDescriptor: SortDescriptor[] = [];
 // public filterDescriptor: FilterDescriptor[] = [];
 public filterTerm: number | null = null;

 public pageChange(event: PageChangeEvent): void {
     this.skip = event.skip;
     this.loadGridItems();
 }

 private loadGridItems(): void {
     this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
 }

 public handleSortChange(descriptor: SortDescriptor[]): void {
     this.sortDescriptor = descriptor;
     this.loadGridItems();
 }

 public handleFilterChange(item: { text: string; value: number | null }): void {
     this.filterTerm = item.value;
     this.skip = 0;
     this.loadGridItems();
 }

 public onFilter(input: Event): void {
     const inputValue = (input.target as HTMLInputElement).value;

 }

}
