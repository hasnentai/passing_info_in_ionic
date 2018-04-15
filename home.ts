import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

import { SePage } from '../../pages/se/se';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list: string[];
  my_data=[
      {
        Name:"sass",
        Info:"I love Sass"
      },
      {
        Name:"CSS",
        Info:"I love Css"
      },
      {
        Name:"IOS",
        Info:"I love IOS"
      },
      {
        Name:"Android",
        Info:"I love Android"
      },
    ];
  
  constructor(public navCtrl: NavController,private appVersion: AppVersion) {
    
  }
  navme(info,name){
    console.log(info)
    this.navCtrl.push(SePage,{
      'Name':name,
      'Info':info
    })
  }

}
