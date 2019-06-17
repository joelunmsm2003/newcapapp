import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PropuestaPage } from '../propuesta/propuesta.page';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {


	pushPage:PropuestaPage


	opciones:any=[
	{'menu':'Seguimiento'},
	{'menu':'Cierre'},
	{'menu':'Entrega'},
	{'menu':'Post Venta'},
	{'menu':'Equipo'},
	{'menu':'Historial'},
	]

  constructor(private router:Router,private modalController: ModalController) {



   }

  ngOnInit() {
  }


ira(data){


	let navigationExtras: NavigationExtras = {
      queryParams: {
        cita: data
      }
    };

	this.router.navigate(['/menu/propuesta'],navigationExtras)
}

   
  
}
