import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
// import { SearchCoursePipe } from './pipes/searchcourses.pipe';
import { AppRoutingModule } from './app-routing.module';
// import { CourseAddComponent } from './components/course-add/course-add.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
