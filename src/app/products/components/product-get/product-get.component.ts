import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../web-services/products.web-service';


@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products!: Array<Product>;
  constructor(private ps: ProductsService<Product>) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      });
  }


  deleteProduct(id :number) {
    this.ps.deleteProduct(id).subscribe( result => {
      this.ngOnInit();
    });
  }
}
