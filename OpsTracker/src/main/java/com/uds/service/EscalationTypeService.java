package com.uds.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.EscalationType;
import com.uds.dto.EscalationTypeDTO;
import com.uds.repository.EscalationTypeRepository;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class EscalationTypeService {

	@Autowired
	private MapperUtil<?, ?> mapperUtil;
	
	@Autowired
	private EscalationTypeRepository escalationTypeRepository;
	
	public String saveEscalationType(EscalationTypeDTO escalationTypeDTO)
	{
		String message = " ";
		EscalationType escalationType = mapperUtil.toEntity(escalationTypeDTO, EscalationType.class);
		try
		{
		 escalationTypeRepository.save(escalationType);
		 message = "success";
		}
		catch(Exception e)
		{
			message = "failed";
		}
		finally
		{
			escalationType = null;
			escalationTypeDTO = null;
		}
		 return message;
	}
	
	public String updateEscalationType(EscalationTypeDTO escalationTypeDTO)
	{
		String message = " ";
		EscalationType escalationType = escalationTypeRepository.findOne(escalationTypeDTO.getId());
		escalationType.setId(escalationTypeDTO.getId());
		escalationType.setEscalationType(escalationTypeDTO.getEscalationType());
		try
		{
		escalationTypeRepository.save(escalationType);
		 message = "success";
		}
		catch(Exception e)
		{
			message = "failed";
		}
		finally
		{
			escalationType = null;
			escalationTypeDTO = null;
		}
		 return message;
	}

	public EscalationType selectedOne(long id)
	{
		EscalationType escalationType = escalationTypeRepository.findOne(id);
		return escalationType;
	}
	
	public List<EscalationType> selectedAll()
	{
		List<EscalationType> escalationTypes = escalationTypeRepository.findAll();
		return escalationTypes;
	}

}
