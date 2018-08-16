package com.lulu.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;

@SpringBootApplication
@ComponentScan(basePackages= {"com.uds.*","com.jallikattu.*"})
public class CustomerApplication  {
	
	@Autowired
	private Environment envVariable;

	public static void main(String[] args) {
		SpringApplication.run(CustomerApplication.class, args);
	}
}