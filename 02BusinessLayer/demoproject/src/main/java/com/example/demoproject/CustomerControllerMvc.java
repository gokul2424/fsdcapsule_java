package com.example.demoproject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/mvc")
public class CustomerControllerMvc {
	
	@Autowired
	private CustomerRepository repository;
	
	@RequestMapping(value = "/customers", method = RequestMethod.GET)
	public String getCustomers(){
		return "customers";
		
		
	}

}
