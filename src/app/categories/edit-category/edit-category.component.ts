import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: FormGroup;
  id:any;
  constructor(private fb:FormBuilder,private router:ActivatedRoute,private categoryService:CategoriesService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.category  = this.fb.group({     
      category_name : ['', Validators.required],        
    });
    if(this.id){
      this.categoryService.getSingleCategory(this.id).subscribe(res=>{
        this.category.patchValue({category_name:res.data.category_name}) 
      })
    }   
  }

  onSubmit(){   
   const data = { id:this.id,category_name:this.category.value.category_name}
    
    this.categoryService.updateCategory(data).subscribe(res=>{
      if(res.status==200){
       // this.toasterService.showSuccess(res.message)
        this.ngOnInit();
      } else {
       // this.toasterService.showError(res.message)
      }
     
    })
   }

}
