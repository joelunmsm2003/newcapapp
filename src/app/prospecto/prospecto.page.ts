import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospecto',
  templateUrl: './prospecto.page.html',
  styleUrls: ['./prospecto.page.scss'],
})
export class ProspectoPage implements OnInit {


	pais=[
	{'name':'Peru'},{'name':'Chile'}
	]

	civil=[
	{'name':'Soltero'},{'name':'Casado'}
	]

	tipodocumento=[
	{'name':'DNI'},{'name':'Carnet de Extranjeria'}
	]

  constructor() { }

  ngOnInit() {
  }


  register(data){

  	console.log(data)

  }

}
