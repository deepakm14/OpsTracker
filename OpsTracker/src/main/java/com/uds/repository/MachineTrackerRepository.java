package com.uds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uds.domain.MachineTracker;

public interface MachineTrackerRepository extends JpaRepository<MachineTracker, Long>{

}
