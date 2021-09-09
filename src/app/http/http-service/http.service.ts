import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  firstImgUrl = "";
  secondImgUrl = "";
  titleImg = '';
  resPost:any;
  resGet:any;
  postData(user:any){
    this.resPost = this.http.post(this.apiUrl,user);
    return this.resPost;
  }
  getData(){
    this.resGet = this.http.get(this.apiUrl);
    return this.resGet;
  }
  setFirstImgUrl(url: string)
  {
    this.firstImgUrl = url;
  }
  getFirstImgUrl(){
    return this.firstImgUrl;
  }
  
  setSecondImgUrl(url: string)
  {
    this.secondImgUrl = url;
  }
  getSecondImgUrl(){
    return this.secondImgUrl;
  }
  setTitle(title: string)
  {
    this.titleImg = title;
  }
  getTitle()
  {
    return this.titleImg;
  }
  
}
