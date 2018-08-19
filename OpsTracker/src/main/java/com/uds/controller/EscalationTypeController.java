package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.EscalationType;
import com.uds.dto.EscalationTypeDTO;
import com.uds.service.EscalationTypeService;

@RestController
@RequestMapping("/uds")
public class EscalationTypeController {
	
	@Autowired
	private EscalationTypeService escaltionTypeService;
	
	@PostMapping("/esctype")
	public EscalationType saveEscalationType(@RequestBody EscalationTypeDTO escalationTypeDTO, HttpServletRequest httpRequest)
	{
		return escaltionTypeService.saveEscalationType(escalationTypeDTO);
	}

	@PutMapping("/esctype/update")
	public EscalationType updateEscalationType(EscalationTypeDTO escalationTypeDTO, HttpServletRequest httpRequest)
	{
		return escaltionTypeService.saveEscalationType(escalationTypeDTO);
	}
	
	@GetMapping("/esctype/{id}")
	public EscalationType selectOne(@PathVariable long id)
	{
		return escaltionTypeService.selectedOne(id);
	}
	
	@GetMapping("/esctype/search")
	public List<EscalationType> selectAll()
	{
		return escaltionTypeService.selectedAll();
	}
}
