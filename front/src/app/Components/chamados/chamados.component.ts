import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Departamento } from 'src/app/Models/departamento';
import { ChamadoService } from 'src/app/Services/chamado.service';
import { CornerAlertService } from 'src/app/Services/cornerAlert.service';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { CadastroChamadoComponent } from '../modal/cadastro-chamado/cadastro-chamado.component';
import { Chamado } from 'src/app/Models/chamado';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css'],
  })
export class ChamadosComponent implements OnInit {

  bsModalRef!: BsModalRef;
  chamados !: Chamado[];

  constructor(
    private modalService: BsModalService,
    private chamadoService : ChamadoService,
    private cornerAlertService: CornerAlertService
    ) {
  }

  ngOnInit(): void {
    this.carregarChamados();
  }

  cadastrarChamado(){
    const bsModalRef: BsModalRef = this.modalService.show(CadastroChamadoComponent, {  });
    if (bsModalRef.onHide) {
      bsModalRef.onHide.subscribe((data) => {
        this.ngOnInit();
      });
    }

  }

  carregarChamados(){
    this.chamadoService.buscarChamados().subscribe(
    (res)=>{
      this.chamados = res;
      debugger
    }
    ,(error) =>{
      this.cornerAlertService.showAlertDanger(error.error.ExceptionMessage);
    });
  }

  deletarChamado(ChamadoId : any){
    this.chamadoService.deletarChamado(ChamadoId).subscribe(
      (res)=>{
        this.cornerAlertService.showAlertSuccess("Chamado deletado!");
        this.ngOnInit();
      }
      ,(error) =>{
        this.cornerAlertService.showAlertDanger(error.error.ExceptionMessage);
      });

  }


}
