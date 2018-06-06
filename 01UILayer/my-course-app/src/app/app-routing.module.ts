import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { SearchCoursePipe } from './pipes/searchcourses.pipe';
import { CourseComponent } from './components/course/course.component';
import { HttpModule } from '@angular/http';
import { CourseService } from './services/course.service';



const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesListComponent },
    { path: 'add', component: CourseAddComponent },
    // { path: 'users', component: UsersComponent }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CourseService],
  exports: [ RouterModule ],
  declarations: [CoursesListComponent, SearchCoursePipe, CourseComponent, CourseAddComponent]
})
export class AppRoutingModule { }