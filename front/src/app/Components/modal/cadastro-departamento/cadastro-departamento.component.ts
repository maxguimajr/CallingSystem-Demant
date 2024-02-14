import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CornerAlertService } from 'src/app/Services/cornerAlert.service';
import { DepartamentoService } from 'src/app/Services/departamento.service';

@Component({
  selector: 'app-cadastro-departamento',
  templateUrl: './cadastro-departamento.component.html',
  styleUrls: ['./cadastro-departamento.component.css']
})
export class CadastroDepartamentoComponent implements OnInit {
  meuForm !: FormGroup;
  constructor(public bsModalRef: BsModalRef,
    private _departamentoService :DepartamentoService,
    private formBuilder: FormBuilder,
    private cornerAlertService: CornerAlertService,) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      NomeDepartamento: [''] // Descrição é opcional
    });
  }


  fecharModal(){
    this.bsModalRef.hide();
  }

  adicionarDepartamento(){

    this.meuForm.value.departamentoId =  parseInt(this.meuForm.value.departamentoId );
    this._departamentoService.adicionarDepartamento(this.meuForm.value).subscribe(
    (res)=>{
      this.cornerAlertService.showAlertSuccess("Salvo com sucesso");
      this.bsModalRef.hide();
    }
    ,(error) =>{
      this.cornerAlertService.showAlertDanger(error.error.ExceptionMessage);
    });

  }
}
