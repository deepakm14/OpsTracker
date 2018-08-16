package com.jallikattu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jallikattu.entity.CustomerID;

@Repository
public interface CustromerIDRepository extends JpaRepository<CustomerID, String>{

}
 