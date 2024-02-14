import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './Components/chamados/chamados.component';
import { DepartamentosComponent } from './Components/departamentos/departamentos.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Rota padrão redirecionando para /home
  { path: 'chamados', component: ChamadosComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'departamentos/:id', component: DepartamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
