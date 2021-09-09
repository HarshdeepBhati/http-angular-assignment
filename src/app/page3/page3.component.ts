import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http/http-service/http.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit{
  titleImg:string;
  firstImage: string;
  secondImage: string;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.titleImg = this.http.getTitle();
    this.firstImage = this.http.getFirstImgUrl();
    this.secondImage = this.http.getSecondImgUrl();
   console.log(this.titleImg);
  }
  
}
