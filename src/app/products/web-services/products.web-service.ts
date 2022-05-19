import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, Product } from '../models/product';

@Injectable({ providedIn: 'root'})

export class ProductsService<T extends Model> {

  uri = 'http://localhost:3000/products';
  products = new Array<T>();

  constructor(private http: HttpClient) { }

  addProduct(ProductName: any, ProductDescription: any, ProductPrice: any) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe( result =>
      console.log("Done."));
  }

  getProducts() {
    return this.http.get<T[]>(`${this.uri}`);
  }

  editProduct(id : any) {
    return this.http.get<Product>(`${this.uri}/${id}`);
  }

  updateProduct(ProductName: any, ProductDescription: any, ProductPrice: any, id: any) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.put<T>(`${this.uri}/${id}`, obj).subscribe(result =>
      console.log("Done.")
    );
  }

  deleteProduct(id :number) {
    return this.http.delete<T>(`${this.uri}/${id}`);
  }

}
