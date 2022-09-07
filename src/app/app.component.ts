import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { ProductService } from './product.service';


interface Item {
    text: string;
    icon: string;
    path: string;
    selected?: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ProductService]
})
export class AppComponent {
    title = 'kendo-angular-app';

    // sideBar: boolean = true;
    // sidelogo: boolean = false;

    // open() {
    //     this.sideBar = false;
    //     this.sidelogo = true;
    // }
    // close() {
    //     this.sideBar = true;
    //     this.sidelogo = false;
    // }

   
    public expanded = true;
    public items: Array<Item> = [];

    constructor(private service: ProductService, private router: Router) {
        this.items = this.mapItems(router.config as Item[]);
        this.items[0].selected = true;
    }

    public onSelect(ev: DrawerSelectEvent): void {
        this.router.navigate([ev.item.path]);
    }

    public mapItems(routes: Item[]): Item[] {
        return routes.map((item) => {
            return {
                text: item.text,
                icon: item.icon,
                path: item.path ? item.path : "",
            };
        });
    }

    // customer() {
    //     this.router.navigate(['customer']);
    // }

    // home() {
    //     this.router.navigate(['home']);
    // }

    // list() {
    //     this.router.navigate(['list']);
    // }

    // charge() {
    //     this.router.navigate(['charge']);
    // }

    // public selected = "Inbox";

    // public items: Array<DrawerItem> = [
    //     { text: "Home", icon: "k-i-home", selected: true },
    //     { separator: true },
    //     { text: "Navigation", icon: "k-i-menu" },
    //     { text: "Pending Pricing", icon: "k-i-currency" },
    //     { separator: true },
    //     { text: "User", icon: "k-i-user" },
    // ];

    // public onSelects(ev: DrawerSelectEvent): void {
    //     this.selected = ev.item.text;
    // }


}
