import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

 @Input()  blog : Blog;
 fullSummary:string;
  constructor(public truncate:TruncatePipe) { 
   
  }
  ngOnInit(): void {
    this.fullSummary=this.blog.summary;
    this.blog.summary=this.truncate.transform(this.blog.summary);
  }

  public showFullSummmary(){
  this.blog.summary=this.fullSummary;
  //console.log("showFullSummary " + this.blog.summary +this.blog.summary);
  }
  setFaviorate(){
    console.log("fav")
   this.blog.isfav=true;
  }
}
