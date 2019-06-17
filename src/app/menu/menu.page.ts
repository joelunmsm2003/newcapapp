import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


pages=[
	
	{
		title:'Datos Personales',
		url:'/menu/datospersonales'
	},
	{
		title:'Prospecto',
		url:'/menu/prospecto'
	},
	{
		title:'Propuesta',
		url:'/menu/propuesta'
	},
	{
		title:'Citas',
		url:'/menu/citas'
	},
	{
		title:'Biblioteca',
		url:'/menu/biblioteca'
	}

]

  selectedPath =''
 


 

   constructor(private router:Router,private menu: MenuController) {


  	


   }

  ngOnInit() {
  }


   openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
