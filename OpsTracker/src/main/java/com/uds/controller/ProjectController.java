package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.uds.service.ProjectService;

@RestController
@RequestMapping("/uds")
public class ProjectController {
	
	private final Logger log = LoggerFactory.getLogger(ProjectController.class);
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/project")
	public ResponseEntity<?> saveProject(@RequestBody ProjectDTO projectDTO, HttpServletRequest request)
	{
		log.debug("****Inside ProjectController*****");
		projectDTO = projectService.createProject(projectDTO);
		return new ResponseEntity<>(projectDTO,HttpStatus.CREATED);
	}
	
	@PutMapping("/project/update")
	public ResponseEntity<?> updateProject(@RequestBody ProjectDTO projectDTO, HttpServletRequest request)
	{
		log.debug("****Inside ProjectController*****");
		projectDTO = projectService.updateProject(projectDTO);
		return new ResponseEntity<>(projectDTO,HttpStatus.OK);
	}
	
	@DeleteMapping("/project/delete/{id}")
	public void deleteProject(@PathVariable long id)
	{
		log.debug("****Inside ProjectController*****");
		projectService.deleteProject(id);
	}
	
	@GetMapping("/project/search")
	public List<ProjectDTO> findAll()
	{
		log.debug("****Inside ProjectController*****");
		return projectService.findAll();
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
