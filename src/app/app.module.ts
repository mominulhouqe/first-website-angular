import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NavberComponent } from './navber/navber.component';
import { BannerComponent } from './banner/banner.component';
import { BlogServices } from './blog.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    NavberComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BlogServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
