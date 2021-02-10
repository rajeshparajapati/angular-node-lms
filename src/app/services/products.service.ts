import { Injectable } from '@angular/core';
import {environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl= environment.baseUrl
  constructor(private http:HttpClient) { }

  /**
   * @description : add product 
   * @method : POST /add_product
   */

  addProduct(post:any){    
    return this.http.post<any>(this.baseUrl+'/add_product',post);
  }

   /**
   * @description : product list 10 post per page
   * @method : GET /products_list
   */

  getProducts(page:number){    
    return this.http.get<any>(this.baseUrl+`/product_list/${page}`);
  }

   /**
   * @description : single product
   * @method : GET /single_product
   */

  getSingleProduct(id:any){    
    return this.http.get<any>(this.baseUrl+`/single_product/${id}`);
  }

   /**
   * @description : delete product
   * @method : Delete /delete_product
   */

  deleteCategory(id:any){    
    return this.http.delete<any>(this.baseUrl+`/delete_product/${id}`);
  }

  /**
   * @description : Update product
   * @method : PUT /update_product
   */

  updateProduct(post:any){    
    return this.http.put<any>(this.baseUrl+`/update_product/${post.id}`,post);
  } 

}
