import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../web-services/products.web-service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm !:FormGroup;

  constructor(private fb:FormBuilder, private ps: ProductsService<Product>, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
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
    this.router.navigate(['products']);
  }



}
