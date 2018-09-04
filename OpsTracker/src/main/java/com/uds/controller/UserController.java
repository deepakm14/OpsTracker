package com.uds.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.dto.StatusDTO;
import com.uds.service.UserService;

@RestController
@RequestMapping("/uds")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/user/{name}/{pwd}")
	public StatusDTO saveSite(@PathVariable String name, @PathVariable String pwd)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		try
		{
			userService.userLogin(name, pwd);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		return statusDTO;
	}
}
