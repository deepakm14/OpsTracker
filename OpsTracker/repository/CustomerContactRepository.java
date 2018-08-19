package com.jallikattu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerContactRepository extends JpaRepository<CustomerContacts, String>{

}
