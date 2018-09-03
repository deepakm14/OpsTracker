package com.uds.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uds.domain.EscalationType;
import com.uds.dto.EscalationTypeDTO;
import com.uds.dto.StatusDTO;
import com.uds.service.EscalationTypeService;

@RestController
@RequestMapping("/uds")
public class EscalationTypeController {
	
	@Autowired
	private EscalationTypeService escaltionTypeService;
	
	@PostMapping("/esctype")
	public StatusDTO saveEscalationType(@RequestBody EscalationTypeDTO escalationTypeDTO, HttpServletRequest httpRequest)
	{	
		return escaltionTypeService.saveEscalationType(escalationTypeDTO);
	}

	@PutMapping("/esctype/update")
	public StatusDTO updateEscalationType(EscalationTypeDTO escalationTypeDTO, HttpServletRequest httpRequest)
	{
		return escaltionTypeService.updateEscalationType(escalationTypeDTO);
	}
	
	@GetMapping("/esctype/{id}")
	public EscalationType selectOne(@PathVariable long id)
	{
		return escaltionTypeService.selectedOne(id);
	}
	
	@GetMapping("/esctype/search/{page}/{size}")
	public Page<EscalationType> selectAll(@PathVariable("page") int page,@PathVariable("size") int size)
	{
		return escaltionTypeService.selectedAll(page,size);
	}
	
	@GetMapping("/esctype/search")
	public List<EscalationType> selectAll()
	{
		return escaltionTypeService.findAll();
	}
}
