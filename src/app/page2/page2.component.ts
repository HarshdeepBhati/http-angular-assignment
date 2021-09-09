import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http-service/http.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  catchApi = [
    {
      title:'',
      image1: '',
      image2:'',
    }
  ];
  getImage: any;


  constructor(private http:HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.getData().subscribe((res) => {
      this.getImage = res;

      for(let i = 0; i<3;i++)
      {
        if(i < 2) this.pushObject();
      this.catchApi[i].title = this.getImage[i]?.title;
      this.catchApi[i].image1 = this.getImage[i]?.url;
      this.catchApi[i].image2 = this.getImage[i]?.thumbnailUrl;
      console.log(this.catchApi[i].image2);
      }
      
    });
  }
  pushObject() {
    this.catchApi.push({
      title: '',
      image1: '',
      image2: '',
    });
  }
  nextPage()
  {
    this.router.navigate(['page3']);
  }

}
