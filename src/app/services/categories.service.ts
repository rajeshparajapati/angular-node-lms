import { Injectable } from '@angular/core';
import {environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl= environment.baseUrl
  constructor(private http:HttpClient) { }

  /**
   * @description : add category
   * @method : POST /add_category
   */

  addCategory(post:any){    
    return this.http.post<any>(this.baseUrl+'/add_category',post);
  }

   /**
   * @description : list category
   * @method : GET /category_list
   */

  getCategories(page:number){    
    return this.http.get<any>(this.baseUrl+`/category_list/${page}`);
  }

  getAllCategories(){
    return this.http.get<any>(this.baseUrl+`/get_all_catogory`);
  }

  /**
   * @description : single category
   * @method : GET /single_category
   */

  getSingleCategory(id:any){    
    return this.http.get<any>(this.baseUrl+`/single_category/${id}`);
  }

   /**
   * @description : delete category
   * @method : Delete /delete_category
   */

  deleteCategory(id:any){    
    return this.http.delete<any>(this.baseUrl+`/delete_category/${id}`);
  }

  /**
   * @description : Update category
   * @method : PUT /update_category
   */

  updateCategory(post:any){    
    return this.http.put<any>(this.baseUrl+`/update_category/${post.id}`,post);
  } 
  
}
