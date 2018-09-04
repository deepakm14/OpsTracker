package com.uds.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.Project;
import com.uds.dto.ProjectDTO;
import com.uds.dto.StatusDTO;
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
	
	public StatusDTO createProject(ProjectDTO projectDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		log.debug("****Inside ProjectService*****");
		Project project = mapperUtil.toEntity(projectDTO, Project.class);
		try
		{
		projectRepository.save(project);
		statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			project = null;
			projectDTO = null;
		}
		return statusDTO;
	}
	
	public StatusDTO updateProject(ProjectDTO projectDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		log.debug("****Inside ProjectService*****");
		Project project = projectRepository.findOne(projectDTO.getId());
		project.setId(projectDTO.getId());
		project.setProjectCode(projectDTO.getProjectCode());
		project.setName(projectDTO.getName());
		try
		{
		project = projectRepository.save(project);
		statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		return statusDTO;
	}
	
	public void deleteProject(long id)
	{
		log.debug("****Inside ProjectService*****");
		Project project = projectRepository.findOne(id);
		projectRepository.delete(project);
	}
	
	@SuppressWarnings("deprecation")
	public Page<Project> findAll(int page, int size)
	{
		return projectRepository.findAll(new PageRequest(page,size));
//		List<ProjectDTO> projectDTOs = new ArrayList<ProjectDTO>();
//		for(Project project : projects)
//		{
//			ProjectDTO projectDTO = new ProjectDTO();
//			projectDTO.setId(project.getId());
//			projectDTO.setName(project.getName());
//			projectDTO.setProjectCode(project.getProjectCode());
//			projectDTOs.add(projectDTO);
//		}
//		return projectDTOs;
	}
	
	public List<Project> selectAll()
	{
		return projectRepository.findAll();
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
