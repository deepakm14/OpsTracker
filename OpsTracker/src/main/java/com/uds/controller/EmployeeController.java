package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.Employee;
import com.uds.dto.EmployeeDTO;
import com.uds.service.EmployeeService;

@RestController
@RequestMapping("/uds")
public class EmployeeController {

	private final Logger log = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/employee")
	public String saveEmployee(@RequestBody EmployeeDTO employeeDTO, HttpServletRequest request)
	{
		log.debug("****Inside SiteController*****");
		String message = employeeService.createEmployee(employeeDTO);
		return message;
	}
	
	@PutMapping("/employee/update")
	public String updateEmployee(@RequestBody EmployeeDTO employeeDTO, HttpServletRequest request)
	{
		log.debug("****Inside SiteController*****");
		String message = employeeService.updateEmployee(employeeDTO);
		return message;
	}
	
/*	@DeleteMapping("/site/delete/{id}")
	public void deleteEmployee(@PathVariable long id)
	{
		log.debug("****Inside SiteController*****");
		employeeService.deleteEmployee(id);
	}*/
	
	@GetMapping("/employee/search/{page}/{size}")
	public Page<Employee> findAll(@PathVariable("page") int page,@PathVariable("size") int size)
	{
		log.debug("****Inside SiteController*****");
		return employeeService.findAll(page,size);
	}
	
	@GetMapping("/employee/search/{id}")
	public Employee findOne(@PathVariable long id)
	{
		log.debug("****Inside SiteController*****");
		return employeeService.findOne(id);
	}

}
