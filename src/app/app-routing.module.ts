import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';

const routes: Routes = [
  { path:'', component:ListProductComponent },
  { path:'add-product', component:AddProductComponent },
  { path:'edit-product/:id', component:EditProductComponent },
  { path:'add-category', component:AddCategoryComponent },
  { path:'edit-category/:id', component:EditCategoryComponent },
  { path:'category-list', component:ListCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
