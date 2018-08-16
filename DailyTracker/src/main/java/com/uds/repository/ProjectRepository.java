package com.uds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.uds.domain.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{
	
	@Query("SELECT p FROM Project p WHERE p.id = :id")
	Project findOne(@Param("id") long id);
	
	@Query("SELECT p FROM Project p WHERE p.name LIKE :name%")
	List<Project> findByName(@Param("name") String name);
}
