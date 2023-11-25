import { Component,OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombreCompania', 'direccion', 'telefono','telefono2'];

  constructor(private servicio: EmpresaService){}

  ngOnInit(): void {
    this.servicio.listarEmpresas();
  }

  get resultados(){
    return this.servicio.resultados;
  }
}
