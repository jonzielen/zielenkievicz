import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogPostsService } from './blogposts.service';
import { BlogpostsResolver } from './blogposts.resolver';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MetaDataService } from './metadata.service';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogLandingComponent,
    BlogPostComponent,
    BlogPageComponent,
    NavComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogPostsService, BlogpostsResolver, MetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
