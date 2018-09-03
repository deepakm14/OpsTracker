package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.EscalationTracker;
import com.uds.domain.ManPowerTracker;
import com.uds.dto.EscalationTrackerDTO;
import com.uds.dto.MachineTrackerDTO;
import com.uds.dto.ManPowerTrackerDTO;
import com.uds.dto.MaterialTrackerDTO;
import com.uds.dto.StatusDTO;
import com.uds.service.OpsTrackerService;
import com.uds.service.SiteService;

@RestController
@RequestMapping("/uds")
public class OpsTrackerController {
	
	private final Logger log = LoggerFactory.getLogger(SiteService.class);

	@Autowired
	private OpsTrackerService opsTrackerService;
	
	@PostMapping("/opstracker/manpower")
	public StatusDTO manPowerTransaction(@RequestBody ManPowerTrackerDTO manPowerTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		
		return opsTrackerService.manPowerTransaction(manPowerTrackerDTO);
		 
	}
	
	@PutMapping("/opstracker/manpower/update")
	public StatusDTO updateManPowerTransaction(@RequestBody ManPowerTrackerDTO manPowerTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateManPowerTransaction(manPowerTrackerDTO);
	}
	
	@PostMapping("/opstracker/machine")
	public StatusDTO machineTransaction(@RequestBody MachineTrackerDTO machineTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.machineTransaction(machineTrackerDTO);
	}
	
	@PutMapping("/opstracker/machine/update")
	public StatusDTO updateManPowerTransaction(@RequestBody MachineTrackerDTO machineTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateMachineTransaction(machineTrackerDTO);
	}
	
	@PostMapping("/opstracker/material")
	public StatusDTO materialTransaction(@RequestBody MaterialTrackerDTO materialTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.materialTransaction(materialTrackerDTO);
	}
	
	@PutMapping("/opstracker/material/update")
	public StatusDTO updateMaterialTransaction(@RequestBody MaterialTrackerDTO materialTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateMaterialTransaction(materialTrackerDTO);
	}
	
	@GetMapping("/opstracker/manpower/search/{page}/{size}")
	public Page<ManPowerTracker> findAllPagination(@PathVariable("page") int page, @PathVariable("size") int size)
	{
		return opsTrackerService.selectAllPagination(page,size);
	}
	
	@PostMapping("/opstracker/escalation")
	public StatusDTO saveEscalation(@RequestBody EscalationTrackerDTO escalationTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.addEscalation(escalationTrackerDTO);
	}
	
	@PutMapping("/opstracker/escalationupdate")
	public StatusDTO updateEscalation(@RequestBody EscalationTrackerDTO escalationTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateEscalation(escalationTrackerDTO);
	}
	
	@GetMapping("/opstracker/escalation/search/{page}/{size}")
	public Page<EscalationTracker> findAllEscTracker(@PathVariable("page") int page, @PathVariable("size") int size)
	{
		return opsTrackerService.selectAllEscTracker(page,size);
	}
	
	@GetMapping("/opstracker/escalation/{id}")
	public EscalationTracker findOneEscTracker(@PathVariable long id)
	{
		return opsTrackerService.selectOneEscTracker(id);
	}
	
	@PostMapping("/opstracker/search/{type}/{page}/{size}")
	public List<?> search(@PathVariable("type") String type, @PathVariable("page") int page, @PathVariable("size") int size)
	{
		return opsTrackerService.search(type, page, size);
	}

}
