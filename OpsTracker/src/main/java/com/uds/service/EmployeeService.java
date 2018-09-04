package com.uds.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.Employee;
import com.uds.domain.User;
import com.uds.dto.EmployeeDTO;
import com.uds.dto.StatusDTO;
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
	
	public StatusDTO createEmployee(EmployeeDTO employeeDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		User user = new User();
		//List<Employee> employees = searchAll();
		//for(Employee checkDuplicate : employees)
		//{
		//if(employeeDTO.getCode() != checkDuplicate.getCode())
		//{
		Employee employee = mapperUtil.toEntity(employeeDTO, Employee.class);
		
		try
		{
			Employee emp = employeeRepository.save(employee);
			
			String userName = Long.toString(emp.getCode());
			user.setUserName(userName);
			user.setPassword("Uds12345");
			userRepository.save(user);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			employee = null;
			employeeDTO = null;
			user = null;
		}
		/*}
		else
		{
			message = "already exist";
		}
		}*/
		return statusDTO;
	}
	
	public StatusDTO updateEmployee(EmployeeDTO employeeDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
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
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			employee = null;
			employeeDTO = null;
		}
		return statusDTO;
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
	
	public List<Employee> selectAll(String desg)
	{
		List<Employee> employees = employeeRepository.findByDesg(desg);
		return employees;
	}
	
	public List<Employee> searchAll()
	{
		List<Employee> employees = employeeRepository.findAll();
		return employees;
	}
}
