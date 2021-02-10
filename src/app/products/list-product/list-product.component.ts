import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../../services/products.service'
declare var $: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:any;
  dataTable:any;
  productData=[];
  page = 0;
  i = 0; 
  constructor(private productService:ProductsService,private chRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.categoryList();
  }

  async categoryList(){   
    this.page = this.page+1;
    this.productService.getProducts(this.page).subscribe((res)=>{      
      const data = res.data;      
     data.forEach(element => {
       console.log(element);
       this.i = this.i+1;
       let action_  = `<a href="/edit-product/${element._id}" [queryParams]="{debug: true}"><i class="far fa-edit"></i></a> | <a href="javascript:void(0)"  onclick="deleteProduct(\'${element._id}\'})"  ><i class="far fa-trash-alt"></i></a>`
       this.productData.push({'s_no':this.i,'product_id':element._id,'product_name':element.product_name,"category_id":element.category_id._id,"category_name":element.category_id.category_name,"action":action_}) 
     });   
      const table: any = $('#example2');
      table.DataTable().clear().destroy();
      this.chRef.detectChanges();     
      this.dataTable = table.DataTable({"info": false, "lengthChange": false,"searching": false,"columns":[ {data: "s_no"},{data: "product_id"},{data: "product_name"},{data: "category_id"},{data: "category_name"},{data: "action"}]}); 
      this.dataTable.rows.add(this.productData).draw(false);   
      
    })
  }

  deleteProduct(id:any){
    alert(id);

  }

}
