import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class MetaDataService {

  defaultTitle: string = 'Jom Blog';

  constructor(private title: Title, private meta: Meta) {}

  setMetaTitle(newTitle) {
    if (newTitle) return this.title.setTitle(this.defaultTitle + ' - ' + newTitle);
    return this.title.setTitle(this.defaultTitle);
  }

  setMetaTags(newTags) {

    const metaTags = [
      { name: 'robots', content: 'index, follow' }
    ];

    const tagsToSkip = ['robots', 'viewport'];

    if (newTags) {

      // remove old tags
      this.meta.getTags('name').map((tag) => {
        // skip tags to skip
        if (tagsToSkip.indexOf(tag.name) !== -1 ) return;

        this.meta.removeTag(`name='${tag.name}'`);
      });

      // update new tags
      newTags.forEach(metaItem => metaTags.push(metaItem));
    }

    this.meta.addTags(metaTags);
  }
}