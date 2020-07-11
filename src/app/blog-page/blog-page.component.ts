import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { MetaDataService } from '../metadata.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  blogPosts = [];

  constructor(private activatedRoute: ActivatedRoute, private metaDataService: MetaDataService) { }

  ngOnInit(): void {
    // data comes from route
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.blogPosts = data.blogPosts;
      }
    );

    this.metaDataService.setMetaTitle('blog posts');
    this.metaDataService.setMetaTags([{ name: 'description', content: 'All my blog posts!' }]);
  }

}
