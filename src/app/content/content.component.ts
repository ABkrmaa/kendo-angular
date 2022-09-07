import { Component, OnInit } from '@angular/core';
import { Input, ViewEncapsulation } from "@angular/core";


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  @Input() selectedItem: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}