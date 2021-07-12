import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  public post;
  public comments;
  public searchText;

  ngOnInit() {
    this.getPostDatabyId(this.route.snapshot.paramMap.get('postid'));
  }

  getPostDatabyId($postId) {
    this.apiService.getData("posts/" + $postId).subscribe(
      (response) => {
        return this.post = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getComments($postId) {
    console.log('getComments');
    console.log($postId);
    this.apiService.getData("comments?postId=" + $postId).subscribe(
      (response) => {
        return this.comments = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
