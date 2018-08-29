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
	public String manPowerTransaction(@RequestBody ManPowerTrackerDTO manPowerTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		
		String message = opsTrackerService.manPowerTransaction(manPowerTrackerDTO);
		return message;
	}
	
	@PutMapping("/opstracker/manpower/update")
	public String updateManPowerTransaction(@RequestBody ManPowerTrackerDTO manPowerTrackerDTO, HttpServletRequest request)
	{
		String message = opsTrackerService.updateManPowerTransaction(manPowerTrackerDTO);
		return message;
	}
	
	@PostMapping("/opstracker/machine")
	public String machineTransaction(@RequestBody MachineTrackerDTO machineTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.machineTransaction(machineTrackerDTO);
	}
	
	@PutMapping("/opstracker/machine/update")
	public String updateManPowerTransaction(@RequestBody MachineTrackerDTO machineTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateMachineTransaction(machineTrackerDTO);
	}
	
	@PostMapping("/opstracker/material")
	public String materialTransaction(@RequestBody MaterialTrackerDTO materialTrackerDTO, HttpServletRequest request)
	{
		log.debug("****Inside OpsTracker Controller****");
		return opsTrackerService.materialTransaction(materialTrackerDTO);
	}
	
	@PutMapping("/opstracker/material/update")
	public String updateMaterialTransaction(@RequestBody MaterialTrackerDTO materialTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.updateMaterialTransaction(materialTrackerDTO);
	}
	
	@GetMapping("/opstracker/manpower/search/{page}/{size}")
	public Page<ManPowerTracker> findAllPagination(@PathVariable("page") int page, @PathVariable("size") int size)
	{
		return opsTrackerService.selectAllPagination(page,size);
	}
	
	@PostMapping("/opstracker/escalation")
	public String saveEscalation(@RequestBody EscalationTrackerDTO escalationTrackerDTO, HttpServletRequest request)
	{
		return opsTrackerService.addEscalation(escalationTrackerDTO);
	}
	
	@PutMapping("/opstracker/escalationupdate")
	public String updateEscalation(@RequestBody EscalationTrackerDTO escalationTrackerDTO, HttpServletRequest request)
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
	
	@PostMapping("/opstracker/search")
	public List<?> search(@RequestBody SearchOptionDTO searchOption)
	{
		return opsTrackerService.search(searchOption);
	}

}
