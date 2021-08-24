import { ProductsListComponent } from './products/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    pathMatch: "full"
  },
  {
    path: 'productsList',
    component: ProductsListComponent
  },
  {
    path: 'addProduct',
    component: AddproductComponent
  },
  {
    path: 'productDetails',
    component: ProductDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
