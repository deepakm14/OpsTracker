package com.uds;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;

@SpringBootApplication
@ComponentScan(basePackages= {"com.uds.*"})
public class OpsTracker  {
	
	@Autowired
	private Environment envVariable;

	public static void main(String[] args) {
		SpringApplication.run(OpsTracker.class, args);
	}
}