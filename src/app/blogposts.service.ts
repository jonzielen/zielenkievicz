export class BlogPostsService {
  private posts = [
    {
      title: 'First Blog Post Title',
      preview: 'Blog preview text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      body: `<img src="assets/images/1.jpeg" class="img-thumbnail float-right ml-4 mb-2" alt="crabalocker">

      <p>Blog body text goes here. <a href="http://www.google.com/" target="_blank">Etc.</a> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p>In tincidunt massa libero, nec faucibus nunc semper et. Pellentesque euismod lorem in urna sodales convallis in ut mauris. Aenean pellentesque libero quis elit cursus, eget egestas tortor feugiat. Nullam id aliquet diam, at blandit arcu. Proin nisl lectus, viverra at ipsum nec, porta tempor tortor. Cras at diam quis turpis sodales luctus. Aenean diam neque, egestas ut turpis vitae, imperdiet consequat purus. In vitae elit dolor. Maecenas ut enim vulputate, eleifend nunc nec, aliquet ante.</p>

      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <img src="assets/images/2.jpeg" class="img-thumbnail float-left mr-4 mb-2" alt="crabalocker">

      <p>Nunc porttitor cursus leo, a viverra metus egestas a. Aliquam iaculis vel arcu vitae interdum. Ut consequat ultricies ligula, eget iaculis urna scelerisque nec. Cras pulvinar id erat quis laoreet. Sed porttitor sapien sed neque fringilla pellentesque eu in metus. Sed in viverra nulla. Quisque elementum ipsum nec erat tincidunt aliquam. Maecenas eleifend sed turpis id placerat. Aenean hendrerit tellus sed justo viverra fringilla.</p>

      <p>Nam at nunc nulla. Nam in venenatis erat, eget fringilla lectus. Suspendisse hendrerit metus non orci porttitor ornare ac id justo. Pellentesque pretium ut diam ut vehicula. Aenean aliquam, est quis dignissim interdum, sapien nisl ornare arcu, non posuere purus nisi eu eros. Cras ac rhoncus dolor, nec tempus justo. In convallis neque id metus malesuada ultricies. Mauris viverra malesuada pretium.</p>`,
      link: 'first-blog-post',
      id: 0
    },
    {
      title: 'Second Blog Post Title',
      preview: 'Second blog preview text. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p>Nunc porttitor cursus leo, a viverra metus egestas a. Aliquam iaculis vel arcu vitae interdum. Ut consequat ultricies ligula, eget iaculis urna scelerisque nec. Cras pulvinar id erat quis laoreet. Sed porttitor sapien sed neque fringilla pellentesque eu in metus. Sed in viverra nulla. Quisque elementum ipsum nec erat tincidunt aliquam. Maecenas eleifend sed turpis id placerat. Aenean hendrerit tellus sed justo viverra fringilla.</p>

      <p>Nam at nunc nulla. Nam in venenatis erat, eget fringilla lectus. Suspendisse hendrerit metus non orci porttitor ornare ac id justo. Pellentesque pretium ut diam ut vehicula. Aenean aliquam, est quis dignissim interdum, sapien nisl ornare arcu, non posuere purus nisi eu eros. Cras ac rhoncus dolor, nec tempus justo. In convallis neque id metus malesuada ultricies. Mauris viverra malesuada pretium.</p>

      <p>Curabitur varius dignissim erat, a interdum orci auctor at. Integer sollicitudin molestie neque et aliquet. Maecenas sodales euismod quam, dignissim luctus urna luctus in. Suspendisse potenti. Nulla sit amet enim risus. Duis sit amet ante eu lacus dignissim facilisis. Nam ut risus nisl. Nulla et rutrum nisl. Aenean non dui felis.</p>`,
      link: 'second-blog-post',
      id: 1
    },
    {
      title: 'Third Blog Post Title',
      preview: 'Third blog preview text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p>Nam at nunc nulla. Nam in venenatis erat, eget fringilla lectus. Suspendisse hendrerit metus non orci porttitor ornare ac id justo. Pellentesque pretium ut diam ut vehicula. Aenean aliquam, est quis dignissim interdum, sapien nisl ornare arcu, non posuere purus nisi eu eros. Cras ac rhoncus dolor, nec tempus justo. In convallis neque id metus malesuada ultricies. Mauris viverra malesuada pretium.</p>`,
      link: 'third-blog-post',
      id: 2
    }
  ];

  getAllPosts() {
    return this.posts;
  }

  getBlogPost(link: string) {
    const post = this.posts.find((post) => post.link === link);
    return post;
  }
}
