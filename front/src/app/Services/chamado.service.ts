import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }
  private apiUrl= "http://localhost:56924/api/Chamado";


  adicionarChamado(chamado: any): Observable<any> {
    return this.http.post(this.apiUrl+"/CadastrarChamado",chamado)
  }
  buscarChamados():Observable<any> {
    return this.http.get<any>(this.apiUrl+"/CarregarChamados")
  }
  deletarChamado(ChamadoId: any):Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/DeletarChamado/${ChamadoId}`)
  }
}
