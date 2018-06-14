package com.example.demoproject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CustomerController {

	@Autowired
	private CustomerRepository repository;
	
	@RequestMapping(value = "/customers", method = RequestMethod.GET)
	public List<Customer> getCustomers(){
		return repository.findAll();
		
	}

	@RequestMapping(value = "/course", method = RequestMethod.POST)
	public ResponseEntity<Customer> addCourses(@RequestBody Customer customer) {
		
		repository.save(customer);
		// courseRepo.save(course);
		// Course course1 = new Course("Angular");
		// course1.setId(123);
		// List<Course> courses = new ArrayList<>();
		// courses.add(course);

		return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
	}

}