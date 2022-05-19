import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductGetComponent } from './components/product-get/product-get.component';

const routes: Routes = [
  {
    path: '',
    component: ProductGetComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent,

  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
