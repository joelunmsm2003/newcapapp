import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() {}

  async myDismiss() {
      const result: Date = new Date();
      
      await this.modalController.dismiss(result);
    }

}
