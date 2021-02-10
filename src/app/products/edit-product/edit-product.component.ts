import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  title = "Add Product";
  categories:any;
  product:FormGroup;
  id:any;
  constructor(private fb:FormBuilder,private titleService:Title,private productService:ProductsService,private categoryService:CategoriesService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.titleService.setTitle(this.title);
    this.product = this.fb.group({
      category_id: ['', Validators.required],
      product_name:['',Validators.required]     
    })
    this.getCategories();
    
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(res=>{
     this.categories= res.data
     this.getProduct()
    })
  }

  getProduct(){
    this.productService.getSingleProduct(this.id).subscribe(res=>{
      console.log(res);
      this.product.patchValue({category_id:res.data.category_id,product_name:res.data.product_name}) 
    })  
  }

  onSubmit(){
  let  data = {id:this.id,category_id:this.product.value.category_id,product_name:this.product.value.product_name}
    this.productService.updateProduct(data).subscribe(res=>{
      console.log(res);
    })
  }



}
