import { Pipe, PipeTransform } from '@angular/core';
import { CourseComponent } from '../components/course/course.component';
import { Course } from '../entities/course';


@Pipe({
    name: 'searchcourses'
})
export class SearchCoursePipe implements PipeTransform {

    transform(value: Array<Course>, args: string) {
        console.log('Search Course Pipe', value);
        console.log('Search Course Pipe', args)
        if(args.trim() == ''){
            return value;
        }
        else{
            let filteredCourses = value.filter(val => {
                return val.title.includes(args)
            });
            return filteredCourses
        }
    }

}