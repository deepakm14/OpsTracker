package com.uds.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.MachineTracker;
import com.uds.domain.ManPowerTracker;
import com.uds.domain.MaterialTracker;
import com.uds.dto.MachineTrackerDTO;
import com.uds.dto.ManPowerTrackerDTO;
import com.uds.dto.MaterialTrackerDTO;
import com.uds.dto.SearchOptionDTO;
import com.uds.repository.MachineTrackerRepository;
import com.uds.repository.ManPowerTrackerRepository;
import com.uds.repository.MaterialTrackerRepository;
import com.uds.repository.SiteRepository;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class OpsTrackerService {

	@Autowired
	private SiteRepository siteRepository;
	
	@Autowired
	private MaterialTrackerRepository materialTrackerRepository;
	
	@Autowired
	private MachineTrackerRepository machineTrackerRepository;
	
	@Autowired
	private ManPowerTrackerRepository manPowerTrackerRepository;
	
	@Autowired
	private MapperUtil<?, ?> mapperUtil;
	
	public MaterialTracker materialTransaction(MaterialTrackerDTO materialTrackerDTO)
	{
		MaterialTracker materialTracker = mapperUtil.toEntity(materialTrackerDTO, MaterialTracker.class);
		try
		{
		Date createdDate = new Date();
		materialTracker.setCreatedDate(createdDate);
		materialTracker.setSubmitDate(createdDate);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		materialTrackerRepository.save(materialTracker);
		return materialTracker;
	}
	
	public MaterialTracker updateMaterialTransaction(MaterialTrackerDTO materialTrackerDTO)
	{
		MaterialTracker materialTracker = new MaterialTracker();
		materialTracker.setId(materialTrackerDTO.getId());
		materialTracker.setMaterialType(materialTrackerDTO.getMaterialType());
		materialTracker.setCommitmentDate(materialTrackerDTO.getCommitmentDate());
		materialTracker.setIndentSubmissionDate(materialTrackerDTO.getIndentSubmissionDate());
		materialTracker.setMaterialSupplyDate(materialTrackerDTO.getMaterialSupplyDate());
		materialTracker.setUniformSupplyDate(materialTrackerDTO.getUniformSupplyDate());
		try
		{
		Date createdDate = new Date();
		materialTracker.setCreatedDate(createdDate);
		materialTracker.setSubmitDate(createdDate);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		materialTracker.setSiteId(materialTrackerDTO.getSiteId());
		materialTracker.setStatus(materialTrackerDTO.getStatus());
		materialTracker.setRemarks(materialTrackerDTO.getRemarks());
		materialTrackerRepository.save(materialTracker);
		return materialTracker;
	}
	
	public ManPowerTrackerDTO manPowerTransaction(ManPowerTrackerDTO manPowerTrackerDTO)
	{
		ManPowerTracker manPowerTracker = mapperUtil.toEntity(manPowerTrackerDTO, ManPowerTracker.class);
		Date date = new Date();
		manPowerTracker.setCreatedDate(date);
		manPowerTrackerRepository.save(manPowerTracker);
		return manPowerTrackerDTO;
	}
	
	public ManPowerTracker updateManPowerTransaction(ManPowerTrackerDTO manPowerTrackerDTO)
	{
		ManPowerTracker manPowerTracker = new ManPowerTracker();
		manPowerTracker.setId(manPowerTrackerDTO.getId());
		manPowerTracker.setActual(manPowerTrackerDTO.getActual());
		manPowerTracker.setPlanned(manPowerTrackerDTO.getPlanned());
		manPowerTracker.setTotalNoOfRelievers(manPowerTrackerDTO.getTotalNoOfRelievers());
		manPowerTracker.setShortfall(manPowerTrackerDTO.getShortfall());
		manPowerTracker.setShiftTime(manPowerTrackerDTO.getShiftTime());
		manPowerTracker.setSiteId(manPowerTrackerDTO.getSiteId());
		try
		{
		String string = "January 2, 2010";
		DateFormat format = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH);
		Date createdDate = format.parse(string);
		manPowerTracker.setCreatedDate(createdDate);
		manPowerTracker.setSubmitDate(createdDate);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return manPowerTracker;
	}
	
	public MachineTracker machineTransaction(MachineTrackerDTO machineTrackerDTO)
	{
		MachineTracker machineTracker = mapperUtil.toEntity(machineTrackerDTO, MachineTracker.class);
		machineTrackerRepository.save(machineTracker);
		return machineTracker;
	}
	
	public MachineTracker updateMachineTransaction(MachineTrackerDTO machineTrackerDTO)
	{
		MachineTracker machineTracker = new MachineTracker();
		machineTracker.setId(machineTrackerDTO.getId());
		machineTracker.setMachineType(machineTrackerDTO.getMachineType());
		machineTracker.setEquipmentType(machineTrackerDTO.getEquipmentType());
		machineTracker.setStatus(machineTrackerDTO.getStatus());
		try
		{
		String string = "January 2, 2010";
		DateFormat format = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH);
		Date createdDate = format.parse(string);
		machineTracker.setComplaintRaisedDate(createdDate);
		machineTracker.setResolutionDate(createdDate);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		machineTrackerRepository.save(machineTracker);
		return machineTracker;
	}
	
	public List<?> search(SearchOptionDTO searchOption)
	{
		List<MachineTracker> machineTrackers = new ArrayList<MachineTracker>();
		List<MaterialTracker> materialTrackers = new ArrayList<MaterialTracker>();
		List<ManPowerTracker> manPowerTrackers = new ArrayList<ManPowerTracker>();
		if(searchOption.isMachine())
		{
			if(searchOption.isFindBySite())
			{
				
			}
			else
			{
				return machineTrackerRepository.findAll();
			}
		}
		else if(searchOption.isManpower())
		{
			if(searchOption.isFindBySite())
			{
				
			}
			else
			{
				return manPowerTrackerRepository.findAll();
			}
		}
		else if(searchOption.isMaterial())
		{
			if(searchOption.isFindBySite())
			{
				
			}
			else
			{
				materialTrackers = materialTrackerRepository.findAll();
				return  materialTrackers;
			}
		}
		return null;
	}
}
