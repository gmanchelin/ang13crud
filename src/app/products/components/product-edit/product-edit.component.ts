import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../web-services/products.web-service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  angForm !: FormGroup;
  product : any = {};
  id !: number;
  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService<Product>, private fb: FormBuilder) {
  this.createForm();
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params['id']).subscribe(result => {
      this.product = result;
      });

    });
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ]
    });
  }

  updateProduct(ProductName: any, ProductDescription: any, ProductPrice: any, id?: any) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
      this.router.navigate(['products']);
    });
  }
}
