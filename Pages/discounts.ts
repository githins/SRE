import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { PagecloudPage } from '../pagecloud/pagecloud';
import { ShopifyPage } from '../shopify/shopify';
import { GodaddyPage } from '../godaddy/godaddy';

/**
 * Generated class for the DiscountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discounts',
  templateUrl: 'discounts.html',
})
export class DiscountsPage {

  galleryType = 'regular';




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  notifyUser()
  {
    this.navCtrl.setRoot(NotificationsPage);
  
  }
  ViewDetails()
  {
    this.navCtrl.setRoot(PagecloudPage);
    
  }
  
  ViewShopify()
  {
    this.navCtrl.setRoot(ShopifyPage);

    
  }
  ViewSquare()
  {
    this.navCtrl.setRoot(GodaddyPage);
    
  }
  ViewBiz()
  {
    this.navCtrl.setRoot(GodaddyPage);
    
  }

  ViewGodaddy()
  {
    this.navCtrl.setRoot(GodaddyPage);
    
  }
}
