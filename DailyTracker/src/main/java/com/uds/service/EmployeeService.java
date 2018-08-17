package com.uds.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

	private final Logger log = LoggerFactory.getLogger(SiteService.class);
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MapperUtil<?,?> mapperUtil;
	
	public EmployeeDTO createEmployee(EmployeeDTO employeeDTO)
	{
		Employee employee = mapperUtil.toEntity(employeeDTO, Employee.class);
		Employee emp = employeeRepository.save(employee);
		User user = new User();
		String userName = Long.toString(emp.getCode());
		user.setUserName(userName);
		user.setPassword("Uds12345");
		userRepository.save(user);
		EmployeeDTO savedEmployeeDTO = mapperUtil.toModel(employee, EmployeeDTO.class);
		return savedEmployeeDTO;
	}
	
	public EmployeeDTO updateEmployee(EmployeeDTO employeeDTO)
	{
		Employee employee = employeeRepository.findOne(employeeDTO.getId());
		employee.setId(employeeDTO.getId());
		employee.setCode(employeeDTO.getCode());
		employee.setName(employeeDTO.getName());
		employee.setDesignation(employeeDTO.getDesignation());
		employee.setMob(employeeDTO.getMob());
		employee.setMail(employeeDTO.getMail());
		employeeRepository.save(employee);
		EmployeeDTO updatedEmployeeDTO = mapperUtil.toModel(employee, EmployeeDTO.class);
		return updatedEmployeeDTO;
	}
	
	public Employee findOne(long id)
	{
		Employee employee = employeeRepository.findOne(id);
		return employee;
	}
	
	public List<Employee> findAll()
	{
		List<Employee> employees = employeeRepository.findAll();
		return employees;
	}
}
