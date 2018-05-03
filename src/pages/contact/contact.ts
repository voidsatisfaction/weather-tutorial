import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmPage } from '../alarm/alarm';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pushPage: any;
  constructor(public navCtrl: NavController) {
    this.pushPage = AlarmPage;
  }
}
