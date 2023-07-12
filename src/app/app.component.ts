import { Component } from '@angular/core';
import { BlogServices } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project With Angular';
  img = 'https://i.ibb.co/QK8ThRz/my-img16.jpg';
  blogs = [
    'This is my first blog with Angular',
    'This is my second blog with Angular',
    'This is my third blog with Angular',
  ];

  number = 1;

  getTitle() {
    return this.title;
  }

  onClick(e: any) {
    // console.log('button Clicked', e);
    e.stopPropagation();
    this.number++;
  }

  onDisrcis(e: any) {
    // console.log('button Clicked', e);
    this.number--;
  }

  onClicke2() {
    console.log('div clicked');
  }

  blogPosts;
  constructor(service: BlogServices) {
    // let service = new BlogServices();

    this.blogPosts = service.getBlogPost();
    // console.log(this.blogPosts);
  }

  email = '';
  name = '';
  passsword = '';
  onSave() {
    console.log(this.email, this.name, this.passsword);
  }
}
