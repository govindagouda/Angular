import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogPostDataService } from './blog-post-data.service';

@NgModule({
  declarations: [
    BlogPostComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TruncatePipe,BlogPostDataService],
  bootstrap: [BlogListComponent]
})
export class AppModule { }
