import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products!: Array<Product>;
  constructor(private ps: ProductsService<Product>) { }



  ngOnInit() {
    this.ps.getProducts();
    this.products = this.ps.products;
  }


  deleteProduct(id :number) : void {
    this.ps.deleteProduct(id);
  }

}
