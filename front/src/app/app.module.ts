
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChamadosComponent } from './Components/chamados/chamados.component';
import { DepartamentosComponent } from './Components/departamentos/departamentos.component';
import { CornerAlertComponent } from './Components/modal/alert/corner-alert.component';
import { CadastroChamadoComponent } from './Components/modal/cadastro-chamado/cadastro-chamado.component';
import { CadastroDepartamentoComponent } from './Components/modal/cadastro-departamento/cadastro-departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ChamadosComponent,
    DepartamentosComponent,
    CornerAlertComponent,
    CadastroChamadoComponent,
    CadastroDepartamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
