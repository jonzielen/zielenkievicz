import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogPostsService } from './blogposts.service';
import { Post } from './post.model';

@Injectable()
export class BlogpostsResolver implements Resolve<Post | Post[]> {
  constructor(private blogpostService: BlogPostsService) {}

  resolve(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post | Post[]> | Promise<Post | Post[]> | Post | Post[]  {
    if (rout.params.pageUrl === undefined) {
      return this.blogpostService.getAllPosts();
    } else {
      return this.blogpostService.getBlogPost(rout.params.pageUrl)
    }
  };
}