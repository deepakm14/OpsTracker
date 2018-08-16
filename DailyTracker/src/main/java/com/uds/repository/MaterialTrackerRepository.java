package com.uds.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.uds.domain.MaterialTracker;

public interface MaterialTrackerRepository extends JpaRepository<MaterialTracker, Long> {
	
	@Query("SELECT m FROM MaterialTracker m WHERE m.id = :id")
	MaterialTracker findOne(@Param("id") long id);
}
