package com.jallikattu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jallikattu.entity.CustomerCard;

@Repository
public interface CustomerCardRepository extends JpaRepository<CustomerCard, String>{

}
