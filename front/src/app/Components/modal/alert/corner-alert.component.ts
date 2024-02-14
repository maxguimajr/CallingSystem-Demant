import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CornerAlertService } from 'src/app/Services/cornerAlert.service';


@Component({
  selector: 'app-corner-alert',
  templateUrl: './corner-alert.component.html',
  styleUrls: ['./corner-alert.component.css']
})
export class CornerAlertComponent implements OnInit {
@Input()type !: string;
@Input() message !: string;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.type;
   this.message ;

debugger
  }
}
