import { Component, OnInit } from '@angular/core';
import { AppService, SearchType } from '../app.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ProspectoproductoComponent } from '../prospectoproducto/prospectoproducto.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.page.html',
  styleUrls: ['./propuesta.page.scss'],
})
export class PropuestaPage implements OnInit {


  results: Observable<any>;
  clientes:any;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  tipo:any;
  tipocita:any;

  constructor(private route: ActivatedRoute, private router: Router,private appservice: AppService,private modalController: ModalController,) { 





  	 this.route.queryParams.subscribe(params => {
      	

      	this.tipocita = params.cita



    });

  }

  ngOnInit() {


  	console.log('type..',this.type)



  	this.results = this.appservice.searchData(this.searchTerm, this.type)

  	this.tipo='1101'


  	this.appservice.traecliente('1101').subscribe((result) => {

		this.clientes = result;
	
	});

  	console.log('iii', this.results)


  }



  getItems(ev: any) {


  	const val = ev.target.value;

	this.appservice.traecliente(this.tipo).subscribe((result) => {

		this.clientes = result;

		    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      
	      this.clientes = this.clientes.filter((item) => {
	        return (item.Cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	
	});


    // set val to the value of the searchbar
   


  }

  traetipo(tipo){




  	this.appservice.traecliente(tipo).subscribe((result) => {

		this.clientes = result;


	});



  }




  async agregapropuesta(data) {


  	data.tipocita = this.tipocita

    const modal =  await  this.modalController.create({
      component: ProspectoproductoComponent,
      componentProps: { value: data}
    });
    return  await  modal.present();
  }


  

}
