import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm !:FormGroup;

  constructor(private fb:FormBuilder, private ps: ProductsService<Product>) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ]
      });
  }

  addProduct(ProductName: any, ProductDescription: any, ProductPrice: any) {
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
  }

  ngOnInit(): void {
  }

}
