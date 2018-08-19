package com.uds.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.uds.domain.EscalationType;

public interface EscalationTypeRepository extends JpaRepository<EscalationType, Long>{

	@Query("SELECT e FROM EscalationType e WHERE e.id = :id")
	EscalationType findOne(@Param("id") long id);
}
