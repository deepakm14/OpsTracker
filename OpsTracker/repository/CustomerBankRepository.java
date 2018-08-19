package com.jallikattu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jallikattu.entity.CustomerBank;

public interface CustomerBankRepository  extends JpaRepository<CustomerBank, String>{

}
