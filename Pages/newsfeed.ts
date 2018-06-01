import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()



@Component({
  selector:'page-newsfeed',
  templateUrl:'newsfeed.html'
})
export class NewsfeedPage{
  url:string;
  data: string;
  constructor(public http: Http ,public navCtrl:NavController){

  }
  ionViewDidLoad(){
    this.loadUser();

  }
  notifyUser()
  {
    this.navCtrl.setRoot(NotificationsPage);
  
  }
  loadUser(){
    this.http.get('https://randomuser.me/api/?results=50')
    .map(res=>res.json())
    .subscribe(data=> {
      this.data=data.results;
      console.log(data.results);

    },err=>{
      console.log(err);

    });

  }
}