import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { Post } from './../post.model';
import { MetaDataService } from '../metadata.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  editable: boolean = true;

  blogPost: Post;

  constructor(
      private activatedRoute: ActivatedRoute,
      private metaDataService: MetaDataService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.blogPost = data.blogPost;
      }
    );

    this.metaDataService.setMetaTitle(this.blogPost.title);
    this.metaDataService.setMetaTags([{ name: 'description', content: this.blogPost.preview }]);
  }
}
