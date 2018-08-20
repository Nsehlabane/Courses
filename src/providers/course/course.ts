import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class CourseProvider {
  url= "assets/codetribe.json";
  

  constructor(public http: HttpClient) {
    console.log('Hello CourseProvider Provider');
  }


  getCourse(){
    return this.http.get(this.url)



}


}
