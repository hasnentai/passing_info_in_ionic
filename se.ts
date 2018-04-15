import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se',
  templateUrl: 'se.html',
})
export class SePage {
  Name:string='';
  Info:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Name=this.navParams.get('Name');
    this.Info=this.navParams.get('Info')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SePage');
  }

}
