import { Component, OnInit, ChangeDetectorRef,AfterViewChecked,OnChanges  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {Router, ActivatedRoute} from "@angular/router"
import { ToasterService } from '../../services/toaster.service';

declare var $: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, AfterViewChecked  {
  products:any;
  product_list:any;
  productData=[];
  page = 1;
  constructor(private productService:ProductsService,private chRef:ChangeDetectorRef,public router:Router,private toasterService: ToasterService) { }

  ngOnInit() {
    this.productList(this.page);
  }

  productList(page){   
        this.productService.getProducts(page).subscribe((res)=>{      
      this.product_list = res.data;
      console.log(this.product_list)
            
    })      
  }
  
  pagination(page){
    this.productList(page)
  }


  numSequence(n: number): Array<number> {  
    return Array(n); 
  } 
  
  deleteProduct(id:any){
    if(confirm("Are you sure want to delete")){
      this.productService.deleteProudct(id).subscribe(res=>{
        if(res.status==200){
          this.toasterService.showSuccess(res.message);
          this.productList(1)
        } else {
          this.toasterService.showError(res.message)
        }
      })
    }  
  }



ngAfterViewChecked(){

  
}
}
