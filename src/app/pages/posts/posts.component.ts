import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public msnsPosts: any;

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.msnsPosts = this.dataSrv.getPosts();

    // this.dataSrv.getPosts()
    //   .subscribe(
    //     (p: any[]) => this.msnsPosts = p
    //   );
  }

}
