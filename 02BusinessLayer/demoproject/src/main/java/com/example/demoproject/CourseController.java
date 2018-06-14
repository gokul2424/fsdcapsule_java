//package com.example.demoproject;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api")
//public class CourseController {
//	
////	@Autowired
////	ICourseRepo courseRepo;
//	
//	List<Course> courses = new ArrayList<>();
//	
//	@RequestMapping(value="/courses" , method=RequestMethod.GET)
//	public List<Course> getCourses(){	
//		return courses;
//	}
//	
//	
//	
//	@RequestMapping(value="/course" , method=RequestMethod.POST)
//	public ResponseEntity<Course> addCourses(@RequestBody Course course){	
////		courseRepo.save(course);	
////		Course course1 = new Course("Angular");
////		course1.setId(123);
////		List<Course> courses = new ArrayList<>();
//		courses.add(course);
//		return new ResponseEntity<Course>(course, HttpStatus.CREATED);
//	}
//
//}
