import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Http} from '@angular/http'
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  myForm: FormGroup
  message: string = ""

  constructor(private courseService: CourseService) { }



  ngOnInit() {

      this.myForm = new FormGroup({
          'course': new FormGroup({
              'title': new FormControl('', [Validators.required] ),
              'summary': new FormControl('', Validators.required)
          })     
      })

      this.myForm.statusChanges.subscribe((data: any) => console.log(data));

  }

  onSubmit() {
      console.log(this.myForm);
      console.log(this.myForm.value);
      this.courseService.addCourse(this.myForm.value)
      .then((res)=> res.json())
      .then((data) =>{
        if(data.success){
          this.message = "Successfully added the course!!"
        }
      })
  }

 

}
