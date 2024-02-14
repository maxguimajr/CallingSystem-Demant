import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Departamento } from 'src/app/Models/departamento';
import { ChamadoService } from 'src/app/Services/chamado.service';
import { CornerAlertService } from 'src/app/Services/cornerAlert.service';
import { DepartamentoService } from 'src/app/Services/departamento.service';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {
  meuForm !: FormGroup;
  departamentos : Departamento[] =[]

  constructor(
    private _departamentoService :DepartamentoService,
    private _chamadoService : ChamadoService,
    private cornerAlertService: CornerAlertService,
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef) { }

  ngOnInit(): void {

    this.buscarDepartamentos();
    debugger
    this.meuForm = this.formBuilder.group({
      departamentoId: [null, Validators.required], // Departamento é obrigatório
      dataEntrega: ['', Validators.required], // Data para entrega é obrigatória
      descricao: [''] // Descrição é opcional
    });
  }

  buscarDepartamentos(){
    this._departamentoService.buscarDepartamentos().subscribe(
    (res)=>{
      this.departamentos = res
    });
  }

  adicionarChamado(){

    this.meuForm.value.departamentoId =  parseInt(this.meuForm.value.departamentoId );
    this._chamadoService.adicionarChamado(this.meuForm.value).subscribe(
    (res)=>{
      this.cornerAlertService.showAlertSuccess("Salvo com sucesso");
      this.bsModalRef.hide();
    }
    ,(error) =>{
      this.cornerAlertService.showAlertDanger(error.error.ExceptionMessage);
    });
  }

  fecharModal(){
    this.bsModalRef.hide();
  }

}
