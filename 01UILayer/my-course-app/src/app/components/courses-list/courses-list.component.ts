import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Array<Course> = []

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.fetchCourses()
    .then((res) =>  res.json())
    .then((courses) => {
      this.courses = courses.data;
      })

  }

}
