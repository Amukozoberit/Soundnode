import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorylist=['All','Charts','PlayLists','Genre','Trending']
  constructor() { }

  ngOnInit(): void {
  }

}
