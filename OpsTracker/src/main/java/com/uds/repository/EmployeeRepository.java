package com.uds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.uds.domain.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	@Query("SELECT e FROM Employee e WHERE e.id = :id")
	Employee findOne(@Param("id") long id);
	@Query("SELECT e FROM Employee e WHERE e.designation = :desg")
	List<Employee> findByDesg(@Param("desg") String desg);

}
