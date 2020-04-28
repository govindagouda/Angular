import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Blog } from '../blog';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { NgForOf } from '@angular/common';
import { BlogPostDataService } from '../blog-post-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs : Blog[][];  
  currentpage:number;
  @ViewChildren('tile') blogPostComponets: QueryList<BlogPostComponent>;
  constructor(public blogPostDataService:BlogPostDataService) { }

  ngOnInit(): void {

  this.blogs= this.blogPostDataService.getBlogPostData(); 
  }

  updatePage(newPage : number){
    console.log("Event Emmited " +newPage);
    this.currentpage=newPage;
  }

  expandAll(){
   // console.log(this.blogPostComponet.fullSummary);
    this.blogPostComponets.forEach(e=>e.showFullSummmary());
  }
}
