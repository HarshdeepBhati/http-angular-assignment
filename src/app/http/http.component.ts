import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpService } from './http-service/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  user: FormGroup;
  File: any;
  url: any;

  ApiObj = {
    title: '',
    image1: '',
    image2: '',
  }

  constructor(private fb: FormBuilder, private http: HttpService, private router: Router) { }
  ngOnInit(): void {
    this.user = this.fb.group({
      fieldTitle: [''],
    })
  }

  onSubmit() {
    this.ApiObj.title = this.user.value?.fieldTitle;
    this.http.setTitle(this.ApiObj.title);
    this.ApiObj.image1 = this.url;
    this.ApiObj.image2 = this.url;
    this.http.postData(this.ApiObj).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['page2']);
  }

  convertFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
        this.http.setFirstImgUrl(this.url);
    };

  }
  convertFile2(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
        this.http.setSecondImgUrl(this.url);
    };

  }


}
