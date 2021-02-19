import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { ToasterService } from '../../services/toaster.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title = "Add Product";
  categories:any;
  product:FormGroup;
  constructor(private fb:FormBuilder,private titleService:Title,private productService:ProductsService,private categoryService:CategoriesService,private toasterService: ToasterService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.product = this.fb.group({
      category_id: ['', Validators.required],
      product_name:['',Validators.required]     
    })
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(res=>{
     this.categories= res.data
    })
  }

  onSubmit(){
    
   this.productService.addProduct(this.product.value).subscribe(res=>{
    if(res.status==200){
      this.toasterService.showSuccess(res.message);
      this.product.reset();
    } else {
      this.toasterService.showError(res.message)
    }   
   })
  }
  


  

}
