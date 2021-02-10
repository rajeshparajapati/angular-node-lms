import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoriesService } from '../../services/categories.service'
declare var $: any;
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories:any;
  dataTable:any;
  constructor( private categoryService: CategoriesService, private chRef:ChangeDetectorRef ) { }

  ngOnInit() {
    this.categoryList();
  }

  categoryList(){   
    this.categoryService.getCategories().subscribe((res)=>{
      this.categories = res.data;  
      const table: any = $('#example2');
      table.DataTable().clear().destroy();
      this.chRef.detectChanges();     
      this.dataTable = table.DataTable({"info": false, "lengthChange": false,"searching": false,}); 
      
    })
  }

  deletecategory(id:any){
    if(confirm("Are you sure want to delete if yes, all product mapped also delete")){
      this.categoryService.deleteCategory(id).subscribe(res=>{
        console.log(res);
      })
    }   
  }

}
