import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compartido/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent, 
    pathMatch:'full'
  },
  {
    path:'empresa',
    loadChildren:() =>import('./empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
