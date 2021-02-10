import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CategoriesService } from '../../services/categories.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm : FormGroup;
  title = 'Add Category';
  constructor(private fb:FormBuilder,private titleService:Title,private categoryService:CategoriesService,private toasterService:ToasterService) { }


  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.categoryForm = this.fb.group({
      category_name: ['', Validators.required]     
    })
  }

  onSubmit(){
    this.categoryService.addCategory(this.categoryForm.value).subscribe(res=>{
      if(res.status==200){
        this.toasterService.showSuccess(res.message)
        this.categoryForm.reset()
      }else {
        this.toasterService.showError(res.message)
      }
    })
  }

  

}
