package com.uds.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.util.MapperUtil;

@Service
@Transactional
public class SchedulerService {

	final Logger log = LoggerFactory.getLogger(SchedulerService.class);
	
	@Autowired
	private MapperUtil<?,?> mapperUtil;
}