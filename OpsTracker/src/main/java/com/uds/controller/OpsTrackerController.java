package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.MachineTracker;
import com.uds.domain.ManPowerTracker;
import com.uds.domain.MaterialTracker;
import com.uds.dto.MachineTrackerDTO;
import com.uds.dto.ManPowerTrackerDTO;
import com.uds.dto.MaterialTrackerDTO;
import com.uds.dto.SearchOptionDTO;
import com.uds.service.OpsTrackerService;
import com.uds.service.SiteService;

@RestController
@RequestMapping("/uds")
public class OpsTrackerController {
	
	private final Logger log = LoggerFactory.getLogger(SiteService.class);

	@Autowired
	private OpsTrackerService opsTrackerService;
	
	@PostMapping("/opstracker/manpower")
	public ManPowerTrackerDTO manPowerTransaction(@RequestBody ManPowerTrackerDTO manPowerTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.manPowerTransaction(manPowerTrackerDTO);
	}
	
	@PutMapping("/opstracker/manpower/update")
	public ManPowerTracker updateManPowerTransaction(@RequestBody ManPowerTrackerDTO manPowerTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateManPowerTransaction(manPowerTrackerDTO);
	}
	
	@PostMapping("/opstracker/machine")
	public MachineTracker machineTransaction(@RequestBody MachineTrackerDTO machineTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.machineTransaction(machineTrackerDTO);
	}
	
	@PutMapping("/opstracker/machine/update")
	public MachineTracker updateManPowerTransaction(@RequestBody MachineTrackerDTO machineTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateMachineTransaction(machineTrackerDTO);
	}
	
	@PostMapping("/opstracker/material")
	public MaterialTracker materialTransaction(@RequestBody MaterialTrackerDTO materialTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.materialTransaction(materialTrackerDTO);
	}
	
	@PutMapping("/opstracker/material/update")
	public MaterialTracker updateMaterialTransaction(@RequestBody MaterialTrackerDTO materialTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateMaterialTransaction(materialTrackerDTO);
	}
	
	@PostMapping("/opstracker/search")
	public List<?> search(@RequestBody SearchOptionDTO searchOption)
	{
		return opsTrackerService.search(searchOption);
	}
}
