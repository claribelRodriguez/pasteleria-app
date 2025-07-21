import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostresComponent } from './postres/postres.component';
import { PasteleriaContactoComponent } from './pasteleria-contacto/pasteleria-contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'postres',
    pathMatch: 'full', 
  },
  {
    path: 'postres',
    component: PostresComponent
  },
  {
    path: 'contacto',
    component: PasteleriaContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
