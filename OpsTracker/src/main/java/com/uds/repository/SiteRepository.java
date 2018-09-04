package com.uds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.uds.domain.Site;

public interface SiteRepository extends JpaRepository<Site, Long>,PagingAndSortingRepository<Site, Long>{
	
	@Query("SELECT s FROM Site s WHERE s.id = :id")
	Site findOne(@Param("id") long id);

	@Query("SELECT s FROM Site s WHERE s.project.id = :projectId")
	List<Site> findByProject(@Param("projectId") long projectId);
	
}
