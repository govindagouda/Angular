import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `<ul> <li *ngFor = "let course of courses"></ul>`
})
export class CourseComponent {

  title="hello";
  courses = ["course1","course2","course3"];
}
