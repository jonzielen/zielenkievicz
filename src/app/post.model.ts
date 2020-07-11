export class Post {
  public title: string;
  public preview: string;
  public body: string;
  public link: string;
  public id: number;

  constructor(title: string, preview: string, body: string, link: string, id: number) {
    this.title = title;
    this.preview = preview;
    this.body = body;
    this.link = link;
    this.id = id;
  }
}