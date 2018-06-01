import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Component } from '@angular/core/src/metadata/directives';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsfeedPage } from './newsfeed';



@NgModule({
  declarations: [
    NewsfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedPage),
  ],
  exports: [
    NewsfeedPage
  ]
})
export class NewsfeedPageModule {}