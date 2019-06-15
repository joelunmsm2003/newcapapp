import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
    {
      path:'prospecto',
      loadChildren:'../prospecto/prospecto.module#ProspectoPageModule'
    },
    {
      path:'propuesta',
      loadChildren:'../propuesta/propuesta.module#PropuestaPageModule'
    },
     {
      path:'datospersonales',
      loadChildren:'../datos-personales/datos-personales.module#DatosPersonalesPageModule'
    },
    {
      path:'citas',
      loadChildren:'../citas/citas.module#CitasPageModule'
    },
    {
      path:'biblioteca',
      loadChildren:'../biblioteca/biblioteca.module#BibliotecaPageModule'
    }
    ]
  },
  {

    path:'',
    redirectTo:'/menu/prospecto'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
