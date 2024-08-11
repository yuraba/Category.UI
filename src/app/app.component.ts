import {Component, OnInit} from '@angular/core';
import {Category} from "./models/category";
import {CategoryService} from "./services/category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Category.UI';
  categories: Category[] = [];

  constructor(private categoryService: CategoryService)  {
  }
  ngOnInit() : void{
    this.categoryService.
      getCategories().subscribe((result: Category[]) => (this.categories = result));
  }

}
