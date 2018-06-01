import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicImageViewerModule} from 'ionic-img-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { MessagesPage } from '../pages/messages/messages';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscountsPage } from '../pages/discounts/discounts';
import { SocialPage } from '../pages/social/social';
import { NotificationsPage } from '../pages/notifications/notifications';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http'; 
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailProvider } from '../providers/email/email';
import { ImageProvider } from '../providers/image/image';
import { HttpClientModule } from '@angular/common/http'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Firebase } from '@ionic-native/firebase';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';

const firebaseAuth= {
  apiKey: "AIzaSyA4vGHkc814hn3OEXM0pO4vgqWvHEEQwKI",
  authDomain: "fir-sre.firebaseapp.com",
  databaseURL: "https://fir-sre.firebaseio.com",
  projectId: "fir-sre",
  storageBucket: "fir-sre.appspot.com",
  messagingSenderId: "604009585532"
};





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,

    NewsfeedPage,
    MessagesPage,
    ProfilePage,
    TabsPage,
    DiscountsPage,
    SocialPage,
    NotificationsPage
  ],
  imports: [
    BrowserModule,
     HttpModule,
     HttpClientModule,
   
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,AngularFirestoreModule,
    AngularFireDatabaseModule,
    IonicImageViewerModule,
   
   
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
 
    NewsfeedPage,
    MessagesPage,
    ProfilePage,
    TabsPage,
    DiscountsPage,
    SocialPage,
    NotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    EmailProvider,
    ImageProvider, Camera,
    Firebase,
    FcmProvider
  ]
})




export class AppModule {}
