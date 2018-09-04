package com.uds.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.EscalationTracker;
import com.uds.domain.MachineTracker;
import com.uds.domain.ManPowerTracker;
import com.uds.domain.MaterialTracker;
import com.uds.dto.EscalationTrackerDTO;
import com.uds.dto.MachineTrackerDTO;
import com.uds.dto.ManPowerTrackerDTO;
import com.uds.dto.MaterialTrackerDTO;
import com.uds.dto.StatusDTO;
import com.uds.repository.EscalationTrackerRepository;
import com.uds.repository.MachineTrackerRepository;
import com.uds.repository.ManPowerTrackerRepository;
import com.uds.repository.MaterialTrackerRepository;
import com.uds.util.DateUtil;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class OpsTrackerService {

	@Autowired
	private EscalationTrackerRepository escalationTrackerRepository;
	
	@Autowired
	private MaterialTrackerRepository materialTrackerRepository;
	
	@Autowired
	private MachineTrackerRepository machineTrackerRepository;
	
	@Autowired
	private ManPowerTrackerRepository manPowerTrackerRepository;
	
	@Autowired
	private MapperUtil<?, ?> mapperUtil;
	
	@Autowired
	private DateUtil dateUtil;
	
	public StatusDTO materialTransaction(MaterialTrackerDTO materialTrackerDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		MaterialTracker materialTracker = mapperUtil.toEntity(materialTrackerDTO, MaterialTracker.class);
		try
		{
			materialTracker.setCreatedDate(dateUtil.currentDate());
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		try
		{
			materialTrackerRepository.save(materialTracker);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		return statusDTO;
	}
	
	public StatusDTO updateMaterialTransaction(MaterialTrackerDTO materialTrackerDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		MaterialTracker materialTracker = new MaterialTracker();
		materialTracker.setId(materialTrackerDTO.getId());
		materialTracker.setMaterialType(materialTrackerDTO.getMaterialType());
		materialTracker.setCommitmentDate(materialTrackerDTO.getCommitmentDate());
		materialTracker.setIndentSubmissionDate(materialTrackerDTO.getIndentSubmissionDate());
		materialTracker.setMaterialSupplyDate(materialTrackerDTO.getMaterialSupplyDate());
		materialTracker.setUniformSupplyDate(materialTrackerDTO.getUniformSupplyDate());
		materialTracker.setCreatedDate(dateUtil.currentDate());
		//materialTracker.setSubmitDate();
		materialTracker.setSiteId(materialTrackerDTO.getSiteId());
		materialTracker.setStatus(materialTrackerDTO.getStatus());
		materialTracker.setRemarks(materialTrackerDTO.getRemarks());
		try
		{
			materialTrackerRepository.save(materialTracker);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		return statusDTO;
	}
	
	public StatusDTO manPowerTransaction(ManPowerTrackerDTO manPowerTrackerDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		ManPowerTracker manPowerTracker = mapperUtil.toEntity(manPowerTrackerDTO, ManPowerTracker.class);
		manPowerTracker.setCreatedDate(dateUtil.currentDate());
		try
		{
			manPowerTrackerRepository.save(manPowerTracker);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		
		return statusDTO;
	}
	
	public StatusDTO updateManPowerTransaction(ManPowerTrackerDTO manPowerTrackerDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
//		ManPowerTracker manPowerTracker = new ManPowerTracker();
//		manPowerTracker.setId(manPowerTrackerDTO.getId());
//		manPowerTracker.setActual(manPowerTrackerDTO.getActual());
//		manPowerTracker.setPlanned(manPowerTrackerDTO.getPlanned());
//		manPowerTracker.setTotalNoOfRelievers(manPowerTrackerDTO.getTotalNoOfRelievers());
//		manPowerTracker.setShortfall(manPowerTrackerDTO.getShortfall());
//		manPowerTracker.setShiftTime(manPowerTrackerDTO.getShiftTime());
//		manPowerTracker.setSiteId(manPowerTrackerDTO.getSiteId());
//		try
//		{
//		String string = "January 2, 2010";
//		DateFormat format = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH);
//		Date createdDate = format.parse(string);
//		manPowerTracker.setCreatedDate(createdDate);
//		manPowerTracker.setSubmitDate(createdDate);
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//		}
//		try
//		{
//			manPowerTrackerRepository.save(manPowerTracker);
//			message = "success";
//		}
//		catch(Exception e)
//		{
//			message = "failed";
//		}
//		finally
//		{
//			manPowerTracker = null;
//			manPowerTrackerDTO = null;
//		}
		
		return statusDTO;
	}
	
	public StatusDTO machineTransaction(MachineTrackerDTO machineTrackerDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		MachineTracker machineTracker = mapperUtil.toEntity(machineTrackerDTO, MachineTracker.class);
		try
		{
		machineTrackerRepository.save(machineTracker);
		statusDTO.setStatus("success");
	}
	catch(Exception e)
	{
		statusDTO.setStatus("failed");
	}
	finally
	{
		machineTracker = null;
		machineTrackerDTO = null;
	}
	return statusDTO;
	}
	
	public StatusDTO updateMachineTransaction(MachineTrackerDTO machineTrackerDTO)
	{
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		MachineTracker machineTracker = new MachineTracker();
		machineTracker.setId(machineTrackerDTO.getId());
		machineTracker.setMachineType(machineTrackerDTO.getMachineType());
		machineTracker.setEquipmentType(machineTrackerDTO.getEquipmentType());
		machineTracker.setModelNo(machineTrackerDTO.getModelNo());
		machineTracker.setSerialNo(machineTrackerDTO.getSerialNo());
		machineTracker.setStatus(machineTrackerDTO.getStatus());
		machineTracker.setComplaintRaisedDate(machineTrackerDTO.getComplaintRaisedDate());
		machineTracker.setResolutionDate(machineTrackerDTO.getResolutionDate());
		try
		{
			machineTrackerRepository.save(machineTracker);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			machineTracker = null;
			machineTrackerDTO = null;
		}
		
		return statusDTO;
	}
	
	@SuppressWarnings("deprecation")
	public Page<ManPowerTracker> selectAllPagination(int page, int size)
	{
		return manPowerTrackerRepository.findAll(new PageRequest(page,size));
	}
	
	public List<?> search(String typeOfTransaction, int page, int size)
	{
		List<MachineTracker> machineTrackers = new ArrayList<MachineTracker>();
		List<MaterialTracker> materialTrackers = new ArrayList<MaterialTracker>();
		List<ManPowerTracker> manPowerTrackers = new ArrayList<ManPowerTracker>();
		if(typeOfTransaction.equals("manpowertransaction"))
		{
			Page<ManPowerTracker> manPowerTrackersPagination = manPowerTrackerRepository.findAll(new PageRequest(page,size));
			List<ManPowerTrackerDTO> manPowerTrackerDTOs = new ArrayList<ManPowerTrackerDTO>();
			manPowerTrackers = manPowerTrackersPagination.getContent();
			manPowerTrackerDTOs = convertManPowerEntityToDto(manPowerTrackers);
			return manPowerTrackerDTOs;
		}
		if(typeOfTransaction.equals("materialtransaction"))
		{
			Page<MaterialTracker> materialTrackersPagination = materialTrackerRepository.findAll(new PageRequest(page,size));
			List<MaterialTrackerDTO> materialTrackerDTOs = new ArrayList<MaterialTrackerDTO>();
			materialTrackers = materialTrackersPagination.getContent();
			materialTrackerDTOs = convertMaterialEntityToDto(materialTrackers);
			return materialTrackerDTOs;			
		}
		if(typeOfTransaction.equals("machinetransaction"))
		{
			Page<MachineTracker> machineTrackersPagination = machineTrackerRepository.findAll(new PageRequest(page,size));
			List<MachineTrackerDTO> machineTrackerDTOs = new ArrayList<MachineTrackerDTO>();
			machineTrackers = machineTrackersPagination.getContent();
			machineTrackerDTOs = convertMachineEntityToDto(machineTrackers);
			return machineTrackerDTOs;
		}
		return null;
	}
	
	public List<ManPowerTrackerDTO> convertManPowerEntityToDto(List<ManPowerTracker> manPowerTrackers)
	{
		List<ManPowerTrackerDTO> manPowerTrackerDTOs = new ArrayList<ManPowerTrackerDTO>();
		for(ManPowerTracker manPowerTracker : manPowerTrackers)
		{
			ManPowerTrackerDTO manPowerTrackerDTO = new ManPowerTrackerDTO();
			manPowerTrackerDTO.setId(manPowerTracker.getId());
			manPowerTrackerDTO.setPlanned(manPowerTracker.getPlanned());
			manPowerTrackerDTO.setActual(manPowerTracker.getActual());
			manPowerTrackerDTO.setShortfall(manPowerTracker.getShortfall());
			manPowerTrackerDTO.setShiftTime(manPowerTracker.getShiftTime());
			manPowerTrackerDTO.setContinuedWithOt(manPowerTracker.getContinuedWithOt());
			manPowerTrackerDTO.setContinuedWithOutOt(manPowerTracker.getContinuedWithOutOt());
			manPowerTrackerDTO.setNewComer(manPowerTracker.getNewComer());
			manPowerTrackerDTO.setCreatedDate(manPowerTracker.getCreatedDate());
			manPowerTrackerDTO.setSubmitDate(manPowerTracker.getSubmitDate());
			manPowerTrackerDTO.setProjectId(manPowerTracker.getProjectId());
			manPowerTrackerDTO.setSiteId(manPowerTracker.getSiteId());
			manPowerTrackerDTOs.add(manPowerTrackerDTO);
		}
		
		return manPowerTrackerDTOs;
	}

	public List<MaterialTrackerDTO> convertMaterialEntityToDto(List<MaterialTracker> materialTrackers)
	{
		List<MaterialTrackerDTO> materialTrackerDTOs = new ArrayList<MaterialTrackerDTO>();
		for(MaterialTracker materialTracker : materialTrackers)
		{
			MaterialTrackerDTO materialTrackerDTO = new MaterialTrackerDTO();
			materialTrackerDTO.setId(materialTracker.getId());
			materialTrackerDTO.setMaterialType(materialTracker.getMaterialType());
			materialTrackerDTO.setCommitmentDate(materialTracker.getCommitmentDate());
			materialTrackerDTO.setIndentSubmissionDate(materialTracker.getIndentSubmissionDate());
			materialTrackerDTO.setMaterialSupplyDate(materialTracker.getMaterialSupplyDate());
			materialTrackerDTO.setUniformSupplyDate(materialTracker.getUniformSupplyDate());
			materialTrackerDTO.setCreatedDate(materialTracker.getCreatedDate());
			materialTrackerDTO.setSubmitDate(materialTracker.getSubmitDate());
			materialTrackerDTO.setStatus(materialTracker.getStatus());
			materialTrackerDTO.setRemarks(materialTracker.getRemarks());
			
			materialTrackerDTOs.add(materialTrackerDTO);
		}
		
		return materialTrackerDTOs;
	}
	
	public List<MachineTrackerDTO> convertMachineEntityToDto(List<MachineTracker> machineTrackers)
	{
		List<MachineTrackerDTO> machineTrackerDTOs = new ArrayList<MachineTrackerDTO>();
		for(MachineTracker machineTracker : machineTrackers)
		{
			MachineTrackerDTO machineTrackerDTO = new MachineTrackerDTO();
			machineTrackerDTO.setId(machineTracker.getId());
			machineTrackerDTO.setMachineType(machineTracker.getMachineType());
			machineTrackerDTO.setEquipmentType(machineTracker.getEquipmentType());
			machineTrackerDTO.setModelNo(machineTracker.getModelNo());
			machineTrackerDTO.setSerialNo(machineTracker.getSerialNo());
			machineTrackerDTO.setStatus(machineTracker.getStatus());
			machineTrackerDTO.setComplaintRaisedDate(machineTracker.getComplaintRaisedDate());
			machineTrackerDTO.setResolutionDate(machineTracker.getResolutionDate());
			machineTrackerDTOs.add(machineTrackerDTO);
		}
		
		return machineTrackerDTOs;
	}

	public StatusDTO addEscalation(EscalationTrackerDTO escalationTrackerDTO) {
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		EscalationTracker escalationTracker = mapperUtil.toEntity(escalationTrackerDTO, EscalationTracker.class);
		try
		{
			escalationTrackerRepository.save(escalationTracker);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			escalationTracker = null;
			escalationTrackerDTO = null;
		}
		return statusDTO;
	}
	
	public StatusDTO updateEscalation(EscalationTrackerDTO escalationTrackerDTO) {
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		EscalationTracker escalationTracker = escalationTrackerRepository.findOne(escalationTrackerDTO.getId());
		escalationTracker.setId(escalationTrackerDTO.getId());
		escalationTracker.setTypeOfEscalation(escalationTrackerDTO.getTypeOfEscalation());
		escalationTracker.setDescription(escalationTrackerDTO.getDescription());
		escalationTracker.setCommunicatedVia(escalationTrackerDTO.getCommunicatedVia());
		escalationTracker.setCommunicatedDate(escalationTrackerDTO.getCommunicatedDate());
		escalationTracker.setEstimatedClosureDate(escalationTrackerDTO.getEstimatedClosureDate());
		escalationTracker.setClosureDate(escalationTrackerDTO.getClosureDate());
		try
		{
			escalationTrackerRepository.save(escalationTracker);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			escalationTracker = null;
			escalationTrackerDTO = null;
		}
		return statusDTO;
	}

	public Page<EscalationTracker> selectAllEscTracker(int page, int size) {
		// TODO Auto-generated method stub
		@SuppressWarnings("deprecation")
		Page<EscalationTracker> escalationTrackers = escalationTrackerRepository.findAll(new PageRequest(page, size));
		return escalationTrackers;
	}

	public EscalationTracker selectOneEscTracker(long id) {
		// TODO Auto-generated method stub
		EscalationTracker escalationTracker = escalationTrackerRepository.findOne(id);
		return escalationTracker;
	}
}
