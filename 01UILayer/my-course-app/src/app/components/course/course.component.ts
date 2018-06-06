import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cts-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  @Input('title') title: string = "Default Title"
  @Input('summary') summary: string = "Default Summary"

  ngOnInit() {
  }

}
