import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../entities/course';

@Injectable()
export class CourseService {
  baseUrl: string = 'http://localhost:7000/'

  fetchCourses(): Promise<any> {
    return this.http.get(this.baseUrl + 'courses')
    .toPromise()

  }

  addCourse(course: Course): Promise<any> {
    return this.http.post(this.baseUrl + 'course', course)
    .toPromise()
  }

  constructor(private http: Http) { }
}
