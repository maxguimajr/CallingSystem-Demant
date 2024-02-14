import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../Models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl= "http://localhost:56924/api/Departamento";

  constructor(private http: HttpClient) { }

  buscarDepartamentos(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/CarregarDepartamentos")
  }
  deletarDepartamento(departamentoId: any):Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/DeletarDepartamento/${departamentoId}`)
  }

  adicionarDepartamento(chamado: any): Observable<any> {
    return this.http.post(this.apiUrl+"/AdicionarDepartamento",chamado)
  }
}
