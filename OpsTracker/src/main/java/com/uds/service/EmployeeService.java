package com.uds.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.Employee;
import com.uds.domain.User;
import com.uds.dto.EmployeeDTO;
import com.uds.repository.EmployeeRepository;
import com.uds.repository.UserRepository;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class EmployeeService {

	private final Logger log = LoggerFactory.getLogger(EmployeeService.class);
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MapperUtil<?,?> mapperUtil;
	
	public String createEmployee(EmployeeDTO employeeDTO)
	{
		String message = " ";
		Employee employee = mapperUtil.toEntity(employeeDTO, Employee.class);
		Employee emp = employeeRepository.save(employee);
		User user = new User();
		String userName = Long.toString(emp.getCode());
		user.setUserName(userName);
		user.setPassword("Uds12345");
		userRepository.save(user);
		try
		{
			mapperUtil.toModel(employee, EmployeeDTO.class);
			message = "success";
		}
		catch(Exception e)
		{
			message = "failed";
		}
		finally
		{
			employee = null;
			employeeDTO = null;
		}
		return message;
	}
	
	public String updateEmployee(EmployeeDTO employeeDTO)
	{
		String message;
		Employee employee = employeeRepository.findOne(employeeDTO.getId());
		employee.setId(employeeDTO.getId());
		employee.setCode(employeeDTO.getCode());
		employee.setName(employeeDTO.getName());
		employee.setDesignation(employeeDTO.getDesignation());
		employee.setMob(employeeDTO.getMob());
		employee.setMail(employeeDTO.getMail());
		employeeRepository.save(employee);
		try
		{
			mapperUtil.toModel(employee, EmployeeDTO.class);
			message = "success";
		}
		catch(Exception e)
		{
			message = "failed";
		}
		finally
		{
			employee = null;
			employeeDTO = null;
		}
		return message;
	}
	
	public Employee findOne(long id)
	{
		Employee employee = employeeRepository.findOne(id);
		return employee;
	}
	
	public Page<Employee> findAll(int page, int size)
	{
		@SuppressWarnings("deprecation")
		Page<Employee> employees = employeeRepository.findAll(new PageRequest(page,size));
		return employees;
	}
}
