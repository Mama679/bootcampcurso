import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment.prod';
import { Empresa, IDataEmpresa } from '../interfaces/IEmpresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  apiUrl:string = enviroment.apiUrl;
  empresaUrl:string = `${this.apiUrl}empresa`;

  resultados:Empresa[]=[];

  constructor(private http:HttpClient) { }

  listarEmpresas(){
    this.http.get<IDataEmpresa>(this.empresaUrl)
        .subscribe((resp) =>{
          this.resultados = resp.resultado;
        });
  }

}
