package com.uds.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.EscalationType;
import com.uds.dto.EscalationTypeDTO;
import com.uds.dto.StatusDTO;
import com.uds.repository.EscalationTypeRepository;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class EscalationTypeService {

	@Autowired
	private MapperUtil<?, ?> mapperUtil;
	
	@Autowired
	private EscalationTypeRepository escalationTypeRepository;
	
	public StatusDTO saveEscalationType(EscalationTypeDTO escalationTypeDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		EscalationType escalationType = mapperUtil.toEntity(escalationTypeDTO, EscalationType.class);
		try
		{
		 escalationTypeRepository.save(escalationType);
		 statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			escalationType = null;
			escalationTypeDTO = null;
		}
		 return statusDTO;
	}
	
	public StatusDTO updateEscalationType(EscalationTypeDTO escalationTypeDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		EscalationType escalationType = escalationTypeRepository.findOne(escalationTypeDTO.getId());
		escalationType.setId(escalationTypeDTO.getId());
		escalationType.setEscalationType(escalationTypeDTO.getEscalationType());
		try
		{
			escalationTypeRepository.save(escalationType);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			escalationType = null;
			escalationTypeDTO = null;
		}
		 return statusDTO;
	}

	public EscalationType selectedOne(long id)
	{
		EscalationType escalationType = escalationTypeRepository.findOne(id);
		return escalationType;
	}
	
	@SuppressWarnings("deprecation")
	public Page<EscalationType> selectedAll(int page, int size)
	{
		Page<EscalationType> escalationTypes = escalationTypeRepository.findAll(new PageRequest(page,size));
		return escalationTypes;
	}
	
	public List<EscalationType> findAll()
	{
		List<EscalationType> escalationTypes = escalationTypeRepository.findAll();
		return escalationTypes;
	}

}
