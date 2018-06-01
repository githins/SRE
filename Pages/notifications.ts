import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, Platform } from 'ionic-angular';

import { FcmProvider } from '../../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {


  

  constructor(platform: Platform, fcm: FcmProvider, toastCtrl: ToastController,public navCtrl: NavController) {
    platform.ready().then(() => {

      // Get a FCM token
      fcm.getToken()

      // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe()
    });

    }
    
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad NotificationsPage');
    }
  
  
    backtoTabs()
    {
      this.navCtrl.setRoot(TabsPage);
    
    }
  }
      
  