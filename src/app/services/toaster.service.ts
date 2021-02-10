import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toasterService:ToastrService) { }
  showSuccess(msg:any,title="") {
    this.toasterService.success(msg,title);
  }
  showError(msg:any,title="") {
    this.toasterService.error(msg,title);
  }
  showInfo(msg:any,title="") {
    this.toasterService.info(msg,title);
  }
  showWarning (msg:any,title="") {
    this.toasterService.warning(msg,title);
  }
}
