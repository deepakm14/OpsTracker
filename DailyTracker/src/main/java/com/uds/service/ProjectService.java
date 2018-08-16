package com.uds.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.Project;
import com.uds.dto.ProjectDTO;
import com.uds.repository.ProjectRepository;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class ProjectService {

	private final Logger log = LoggerFactory.getLogger(ProjectService.class);
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private MapperUtil<?,?> mapperUtil;
	
	public ProjectDTO createProject(ProjectDTO projectDTO)
	{
		log.debug("****Inside ProjectService*****");
		Project project = mapperUtil.toEntity(projectDTO, Project.class);
		project = projectRepository.save(project);
		ProjectDTO savedProjectDTO = mapperUtil.toModel(project, ProjectDTO.class);
		return savedProjectDTO;
	}
	
	public ProjectDTO updateProject(ProjectDTO projectDTO)
	{
		log.debug("****Inside ProjectService*****");
		Project project = projectRepository.findOne(projectDTO.getId());
		project.setId(projectDTO.getId());
		project.setProjectCode(projectDTO.getProjectCode());
		project.setName(projectDTO.getName());
		ProjectDTO updatedProjectDTO = mapperUtil.toModel(project, ProjectDTO.class);
		return updatedProjectDTO;
	}
	
	public void deleteProject(long id)
	{
		log.debug("****Inside ProjectService*****");
		Project project = projectRepository.findOne(id);
		projectRepository.delete(project);
	}
	
	public List<Project> findAll()
	{
		List<Project> projects = projectRepository.findAll();
		return projects;
	}
	
	public Project findOne(long id)
	{
		Project project = projectRepository.findOne(id);
		return project;
	}
	
	public List<Project> findByName(String name)
	{
		List<Project> projects = projectRepository.findByName(name);
		return projects;
	}
}
