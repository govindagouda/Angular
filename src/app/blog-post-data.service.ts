import { Injectable } from '@angular/core';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogPostDataService {

  constructor() { }

  getBlogPostData(): Blog[][]{
   return  [ 
           [
       {
        title:"title1",
        summary:"summary1"
      },
      {
        title:"title2",
        summary:"summary2"
      },
      {
        title:"title3",
        summary:"summary3"
      }

    ],[
      {
        title:"page2Title",
        summary:"summary3"
      },
      {
        title:"page2Title",
        summary:"summary4"
      },
      {
        title:"page2Title",
        summary:"summary5"
      }

    ],
    [
      {
        title:"page3Title",
        summary:"summary6"
      },
      {
        title:"page3Title",
        summary:"summary7"
      },
      {
        title:"page3Title",
        summary:"summary8"
      }

    ]
  ]
  }
}
