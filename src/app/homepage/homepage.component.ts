import { MetaDataService } from './../metadata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private metaDataService: MetaDataService) {}

  ngOnInit() {
    this.metaDataService.setMetaTitle('A web explorer!');
    this.metaDataService.setMetaTags([{ name: 'description', content: 'Welcome to my homepage!' }]);
  }
}
