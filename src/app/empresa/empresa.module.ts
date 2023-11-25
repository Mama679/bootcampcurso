import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import {MaterialModule} from '../material/material.module';
import { EmpresaService } from './empresa.service';

@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    HomeEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule
  ],
  exports:[
    ListadoComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    HomeEmpresaComponent
  ],
  providers:[
    EmpresaService
  ]
})
export class EmpresaModule { }
