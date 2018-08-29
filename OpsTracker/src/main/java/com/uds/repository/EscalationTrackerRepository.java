package com.uds.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.uds.domain.EscalationTracker;

public interface EscalationTrackerRepository extends JpaRepository<EscalationTracker, Long>{

	@Query("SELECT e FROM EscalationTracker e WHERE e.id = :id")
	EscalationTracker findOne(@Param("id") long id);
}
