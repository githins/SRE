import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile={} as Profile;

  constructor( private afAuth: AngularFireAuth,private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  notifyUser()
  {
    this.navCtrl.setRoot(NotificationsPage);
  
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth=> {
      this.afDatabase.list( `profile/${auth.uid}`).push(this.profile)
      .then(()=> this.navCtrl.push(TabsPage));

      
    })
  }
  
}
