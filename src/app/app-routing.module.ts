import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BlogpostsResolver } from './blogposts.resolver';

import { HomepageComponent } from './homepage/homepage.component';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRouts: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent},
  {
    path: 'blog',
    component: BlogLandingComponent,
    children: [
      { path: ':pageUrl',
        component: BlogPostComponent,
        resolve: {
          blogPost: BlogpostsResolver
        }
      },
      { path: '',
        component: BlogPageComponent,
        resolve: {
          blogPosts: BlogpostsResolver
        }
      }
    ]
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
