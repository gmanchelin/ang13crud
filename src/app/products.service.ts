import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './model/product';

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
    this.http.post<T>(`${this.uri}`, obj) .subscribe(() => this.getProducts);
  }

  getProducts() {
    return this.http.get<T[]>(`${this.uri}`).subscribe(products => {
      this.products.splice(0,this.products.length);
      products.forEach(c=>this.products.push(c));
    });
  }

  editProduct(id : any) {
    return this.http.get<T>(`${this.uri}/${id}`).subscribe(() => this.getProducts);
  }

  updateProduct(ProductName: any, ProductDescription: any, ProductPrice: any, id: any) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.put<T>(`${this.uri}/${id}`, obj).subscribe(() => this.getProducts);
  }

  deleteProduct(id :number) : void {
    this.http.delete<T>(`${this.uri}/${id}`).subscribe(() => this.getProducts);
  }

}
