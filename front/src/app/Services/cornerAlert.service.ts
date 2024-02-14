
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CornerAlertComponent } from '../Components/modal/alert/corner-alert.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class CornerAlertService  {
  private alertSubject = new Subject<{ type: 'success' | 'error', message: string }>();

  constructor(private modalService : BsModalService) { }

 private showAlert(message:string , type: AlertTypes){
    const bsModalRef : BsModalRef = this.modalService.show(CornerAlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message

    setTimeout(() => {
      bsModalRef.hide();
    }, 3000);
 }

  showAlertDanger(message: string) {
    this.showAlert( message, AlertTypes.DANGER);
  }
  showAlertSuccess(message: string) {
    this.showAlert( message, AlertTypes.SUCCESS);
  }
}
