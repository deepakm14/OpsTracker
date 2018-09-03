package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.Project;
import com.uds.dto.ProjectDTO;
import com.uds.dto.StatusDTO;
import com.uds.service.ProjectService;

@RestController
@RequestMapping("/uds")
public class ProjectController {
	
	private final Logger log = LoggerFactory.getLogger(ProjectController.class);
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/project")
	public StatusDTO saveProject(@RequestBody ProjectDTO projectDTO, HttpServletRequest request)
	{
		log.debug("****Inside ProjectController*****");
		return projectService.createProject(projectDTO);
	}
	
	@PutMapping("/project/update")
	public StatusDTO updateProject(@RequestBody ProjectDTO projectDTO, HttpServletRequest request)
	{
		log.debug("****Inside ProjectController*****");
		return projectService.updateProject(projectDTO);
	}
	
	@DeleteMapping("/project/delete/{id}")
	public void deleteProject(@PathVariable long id)
	{
		log.debug("****Inside ProjectController*****");
		projectService.deleteProject(id);
	}
	
	@GetMapping("/project/search/{page}/{size}")
	public Page<Project> findAll(@PathVariable("page") int page,@PathVariable("size") int size)
	{
		log.debug("****Inside ProjectController*****");
		return projectService.findAll(page,size);
	}
	
	@GetMapping("/project/search")
	public List<Project> findAll()
	{
		log.debug("****Inside ProjectController*****");
		return projectService.selectAll();
	}
	
	@GetMapping("/project/search/{id}")
	public Project findOne(@PathVariable long id)
	{
		log.debug("****Inside ProjectController*****");
		return projectService.findOne(id);
	}
	
//	@GetMapping("/project/search/{name}")
//	public List<Project> findByName(@PathVariable String name)
//	{
//		log.debug("****Inside ProjectController*****");
//		return projectService.findByName(name);
//	}
	
}
