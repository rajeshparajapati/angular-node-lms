import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ToasterService } from '../../services/toaster.service';
declare var $: any;
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories:any;
  dataTable:any;
  page = 1;
 
  constructor( private categoryService: CategoriesService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.categoryList(this.page);
  }

  categoryList(page:number){   
    this.categoryService.getCategories(page).subscribe((res)=>{
      this.categories = res.data;
      console.log(this.categories);      
    })
  }

  pagination(page){
    this.page = page
    this.categoryList(page)
  }

  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 

  deletecategory(id:any){
    if(confirm("Are you sure want to delete if yes, all product mapped also delete")){
      this.categoryService.deleteCategory(id).subscribe(res=>{
        if(res.status==200){
          this.toasterService.showSuccess(res.message);
          this.categoryList(1)
        } else {
          this.toasterService.showError(res.message)
        }
      })
    }   
  }

}
