import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  public postData;
  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.apiService.getData("posts").subscribe(
      (response) => {
        return this.postData = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

}
