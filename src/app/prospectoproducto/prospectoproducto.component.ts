import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams,AlertController} from '@ionic/angular';
import { AppService, SearchType } from '../app.service';

@Component({
  selector: 'app-prospectoproducto',
  templateUrl: './prospectoproducto.component.html',
  styleUrls: ['./prospectoproducto.component.scss'],
})
export class ProspectoproductoComponent implements OnInit {


ramos:any;

tipos:any;
tipo:any;
ramo:any;
tipocita:any;

  cliente:any;
  productos:any;

  listaproductos:any=[];

  constructor(public alertController: AlertController,private appservice: AppService,private modalController: ModalController,public navParams:NavParams) { 


    console.log('sjjs',navParams['data']['value'])

    this.cliente=navParams['data']['value']


    this.tipocita = navParams['data']['value']['tipocita']


    this.ramos= this.appservice.traeramos()

  }

  ngOnInit() {}


    async myDismiss() {
      const result: Date = new Date();
      
      await this.modalController.dismiss(result);
    }

    traetipos(data){

      console.log('isisis',data.target.value)

      this.tipos= this.appservice.traetipo(data.target.value)
    }

       traeproductos(data){

      console.log('productos',this.ramo,data.target.value)

      this.productos= this.appservice.traeproductos(this.ramo,data.target.value)
    }

    escogeproducto(data){


     if(this.tipocita=='Post Venta'){this.postventa(data.target.value)}

    if(this.tipocita=='Entrega'){this.entrega(data.target.value)}

    if(this.tipocita=='Cierre'){this.cierre(data.target.value)}

    if(this.tipocita=='Seguimiento'){this.seguimiento(data.target.value)}




    }




      async postventa(data) {
    const alert = await this.alertController.create({
      header: 'Post Venta',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Ingrese observacion'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (result) => {


            console.log(result)

            let _data={'producto':result.name1,'observacion':data}

            this.listaproductos.push(_data)

          }
        }
      ]
    });

    await alert.present();
  }


   async cierre(data) {
    const alert = await this.alertController.create({
      header: 'Cierre',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Modalidad'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Prima Target'
        },

        {
          name: 'name1',
          type: 'text',
          placeholder: 'Prima Anual'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (result) => {


            console.log(result)

            let _data={'producto':result.name1,'observacion':data}

            this.listaproductos.push(_data)

          }
        }
      ]
    });

    await alert.present();
  }

   async entrega(data) {
    const alert = await this.alertController.create({
      header: 'Entrega',
      inputs: [
        {
          name: 'name1',
          type: 'date',
          placeholder: 'Fecha Entrega Poliza'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Observacion'
        }

       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (result) => {


            console.log(result)

            let _data={'producto':result.name1,'observacion':data}

            this.listaproductos.push(_data)

          }
        }
      ]
    });

    await alert.present();
  }

   async seguimiento(data) {
    const alert = await this.alertController.create({
      header: 'Seguimiento',
      inputs: [
       
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Observacion'
        }

       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (result) => {


            console.log(result)

            let _data={'producto':result.name1,'observacion':data}

            this.listaproductos.push(_data)

          }
        }
      ]
    });

    await alert.present();
  }


    async ultimopaso(data) {
    const alert = await this.alertController.create({
      header: 'Finalizar',
      inputs: [
        {
          name: 'name1',
          type: 'date',
          placeholder: 'Fecha Cita'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Observacion'
        }

       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (result) => {


            console.log(result)

            let _data={'producto':result.name1,'observacion':data}

          

          }
        }
      ]
    });

    await alert.present();
  }


}
