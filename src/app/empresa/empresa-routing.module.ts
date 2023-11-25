import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes:Routes=[
 {
   path:'',component:HomeEmpresaComponent,
   children:[
    {
      path:'listado',component:ListadoComponent
    },
    {
      path:'agregar',component:AgregarComponent
    },
    {
      path:'editar/:id',component:EditarComponent
    },
    {
      path:'borrar/:id',component:EliminarComponent
    },
    {
      path:'**',redirectTo:'listado'
    }
  ]
 }
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EmpresaRoutingModule { }
