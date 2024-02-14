import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Departamento } from 'src/app/Models/departamento';
import { CornerAlertService } from 'src/app/Services/cornerAlert.service';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { CadastroDepartamentoComponent } from '../modal/cadastro-departamento/cadastro-departamento.component';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  idDoChamado: any;
  departamentos : Departamento[] =[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _departamentoService :DepartamentoService,
    private cornerAlertService: CornerAlertService,
    private modalService: BsModalService,) { }

  ngOnInit(): void {
    this.buscarDepartamentos();

  }


  buscarDepartamentos(){
    this._departamentoService.buscarDepartamentos().subscribe(
    (res)=>{
      this.departamentos = res
    });
  }

  deletarDepartamento(idDepartamento:any){
    this._departamentoService.deletarDepartamento(idDepartamento).subscribe(
      (res)=>{
        this.cornerAlertService.showAlertSuccess("Departamento deletado!");
        this.ngOnInit();
      }
      ,(error) =>{
        this.cornerAlertService.showAlertDanger(error.error.ExceptionMessage);
      });
  }

  cadastrarDepartamento(){
    const bsModalRef: BsModalRef = this.modalService.show(CadastroDepartamentoComponent, {  });
    if (bsModalRef.onHide) {
      bsModalRef.onHide.subscribe((data) => {
        this.ngOnInit();
      });
    }

  }
}
