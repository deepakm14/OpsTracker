package com.jallikattu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jallikattu.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{

}
