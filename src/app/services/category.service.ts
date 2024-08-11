import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "categories";
  constructor(private  http: HttpClient) { }
  public getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>('https://localhost:7096/api/v1/categories');
}
}
