package com.uds.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.service.UserService;

@RestController
@RequestMapping("/uds")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/user")
	public String saveSite(@PathVariable String name, @PathVariable String pwd)
	{
		String status = "failed";	
		status = userService.userLogin(name, pwd);
		return status;
	}
}
