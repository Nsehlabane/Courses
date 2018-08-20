import { InformationPage } from './../information/information';
import { CourseProvider } from './../../providers/course/course';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  courses:any;
  arrCourses=[]

  lessons:any;
  arrLessons=[];

  constructor(public navCtrl: NavController, private service:CourseProvider) {

    this.service.getCourse().subscribe(result=>{
      
      this.courses= result;
      this.arrCourses= this.courses.courses

      console.log("response:",this.courses)


      this.lessons= result;
      this.arrLessons= this.lessons.lessons


 });


  }

  details(lessons:any){
    this.navCtrl.push(InformationPage,{data:lessons});
    
  }


}
