import { CourseProvider } from './../../providers/course/course';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  
  course: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:CourseProvider) {
    this.course=this.navParams.get('data');
  }
  
  details(){

    this.service.getCourse().subscribe(data=>{
  })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}
