package com.uds.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.Machines;
import com.uds.domain.ManPower;
import com.uds.domain.Material;
import com.uds.domain.Project;
import com.uds.domain.Site;
import com.uds.dto.MachinesDTO;
import com.uds.dto.ManPowerDTO;
import com.uds.dto.MaterialDTO;
import com.uds.dto.SiteDTO;
import com.uds.dto.StatusDTO;
import com.uds.repository.ProjectRepository;
import com.uds.repository.SiteRepository;
import com.uds.util.DateUtil;
import com.uds.util.MapperUtil;

@Service
@Transactional
public class SiteService {

	private final Logger log = LoggerFactory.getLogger(SiteService.class);

	@Autowired
	private DateUtil dateUtil;
	
	@Autowired
	private SiteRepository siteRepository;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private MapperUtil<?, ?> mapperUtil;

	public StatusDTO createSite(SiteDTO siteDTO) {
		StatusDTO statusDTO = new StatusDTO();
		//statusDTO.setStatus(" ");
		log.debug("****Inside ProjectService*****");
		Site site = mapperUtil.toEntity(siteDTO, Site.class);
		Project project = projectRepository.findOne(siteDTO.getProjectId());
		site.setProject(project);
		List<ManPowerDTO> manPowerDTOs = siteDTO.getManPowerDTO();
		List<MaterialDTO> materialDTOs = siteDTO.getMaterialDTO();
		List<MachinesDTO> machineDTOs = siteDTO.getMachineDTO();
		List<ManPower> manPowers = new ArrayList<ManPower>();
		List<Material> materials = new ArrayList<Material>();
		List<Machines> machines = new ArrayList<Machines>();
		for (ManPowerDTO manDTO : manPowerDTOs) {
			ManPower manPower = mapperUtil.toEntity(manDTO, ManPower.class);
			manPower.setTypeOfService("ManPower");
			manPower.setSite(site);
			manPowers.add(manPower);
		}
		for (MaterialDTO matDTO : materialDTOs) {
			Material material = mapperUtil.toEntity(matDTO, Material.class);
			material.setCommitmentDate(matDTO.getCommitmentDate());
			material.setTypeOfService("Material");
			material.setSite(site);
			materials.add(material);
		}
		for (MachinesDTO macDTO : machineDTOs) {
			Machines machine = mapperUtil.toEntity(macDTO, Machines.class);
			machine.setTypeOfService("Machine");
			machine.setSite(site);
			machines.add(machine);
		}
		site.setManPower(manPowers);
		site.setMaterial(materials);
		site.setMachine(machines);
		try
		{
		siteRepository.save(site);
		statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		finally
		{
			site = null;
			siteDTO = null;
		}
		return statusDTO;
	}

	public StatusDTO updateSite(SiteDTO siteDTO) {
		StatusDTO statusDTO = new StatusDTO();
		statusDTO.setStatus(" ");
		log.debug("****Inside ProjectService*****");
		Site site = siteRepository.findOne(siteDTO.getId());
		Project project = projectRepository.findOne(siteDTO.getId());
		site.setId(siteDTO.getId());
		site.setName(siteDTO.getName());
		site.setProject(project);
		site.setAddress(siteDTO.getAddress());
		site.setContractType(siteDTO.getContractType());
		site.setRegionalManagerId(siteDTO.getRegionalManagerId());
		site.setSeniorManagerId(siteDTO.getSeniorManagerId());
		site.setAsstSeniorManagerId(siteDTO.getAsstSeniorManagerId());
		site.setSiteInchargeId(siteDTO.getSiteInchargeId());
		List<ManPowerDTO> manPowerDTOs = siteDTO.getManPowerDTO();
		List<MaterialDTO> materialDTOs = siteDTO.getMaterialDTO();
		List<MachinesDTO> machineDTOs = siteDTO.getMachineDTO();
		List<ManPower> manPowers = new ArrayList<ManPower>();
		List<Material> materials = new ArrayList<Material>();
		List<Machines> machines = new ArrayList<Machines>();
		for(ManPowerDTO manDTO : manPowerDTOs)
		{
			ManPower manPower = new ManPower();
			manPower.setId(manDTO.getId());
			manPower.setTypeOfService(manDTO.getTypeOfService());
			manPower.setPlanned(manDTO.getPlanned());
			manPower.setSite(site);
			manPowers.add(manPower);
		}
		for(MaterialDTO matDTO : materialDTOs)
		{
			Material material = new Material();
			material.setId(matDTO.getId());
			material.setTypeOfService(matDTO.getTypeOfService());
			material.setMaterialType(matDTO.getMaterialType());
			material.setCommitmentDate(matDTO.getCommitmentDate());
			material.setSite(site);
			materials.add(material);
		}
		for(MachinesDTO macDTO : machineDTOs)
		{
			Machines machine = new Machines();
			machine.setId(macDTO.getId());
			machine.setTypeOfService(macDTO.getTypeOfService());
			machine.setMachineType(macDTO.getEquipmentType());
			machine.setSerialNo(macDTO.getSerialNo());
			machine.setModelNo(macDTO.getModelNo());
			machine.setEquipmentType(macDTO.getEquipmentType());
			machine.setSite(site);
			machines.add(machine);
		}
		site.setManPower(manPowers);
		site.setMaterial(materials);
		site.setMachine(machines);
		try
		{
			siteRepository.save(site);
			statusDTO.setStatus("success");
		}
		catch(Exception e)
		{
			statusDTO.setStatus("failed");
		}
		return statusDTO;
	}

	public void deleteSite(long id) {
		log.debug("****Inside ProjectService*****");
		Site site = siteRepository.findOne(id);
		siteRepository.delete(site);
	}

	@SuppressWarnings("deprecation")
	public List<SiteDTO> findAll(int page, int size) {
		Page<Site> sitePagination = siteRepository.findAll(new PageRequest(page,size));
		List<Site> sites = sitePagination.getContent();
		List<SiteDTO> siteDTOs = new ArrayList<SiteDTO>();
		siteDTOs = convertEntityToDTO(sites);
		return siteDTOs;
	}
	
	public List<SiteDTO> selectAll() {
		List<Site> sites = siteRepository.findAll();
		List<SiteDTO> siteDTOs = new ArrayList<SiteDTO>();
		siteDTOs = convertEntityToDTO(sites);
		return siteDTOs;

	}
	
	public List<SiteDTO> convertEntityToDTO(List<Site> sites)
	{
		List<SiteDTO> siteDTOs = new ArrayList<SiteDTO>();
		for (Site site : sites) {
			SiteDTO siteDTO = new SiteDTO();
			siteDTO.setId(site.getId());
			siteDTO.setName(site.getName());
			siteDTO.setProjectId(site.getProject().getId());
			siteDTO.setProjectName(site.getProject().getName());
			siteDTO.setAddress(site.getAddress());
			siteDTO.setContractType(site.getContractType());
			siteDTO.setRegionalManagerId(site.getRegionalManagerId());
			siteDTO.setSeniorManagerId(site.getSeniorManagerId());
			siteDTO.setAsstSeniorManagerId(site.getAsstSeniorManagerId());
			siteDTO.setSiteInchargeId(site.getSiteInchargeId());
			List<ManPower> manPowers = site.getManPower();
			List<Material> materials = site.getMaterial();
			List<Machines> machines = site.getMachine();
			List<MaterialDTO> materialDTOs = new ArrayList<MaterialDTO>();
			List<MachinesDTO> machineDTOs = new ArrayList<MachinesDTO>();
			List<ManPowerDTO> manPowerDTOs = new ArrayList<ManPowerDTO>();
			for(ManPower manPower : manPowers)
			{
				ManPowerDTO manPowerDTO = new ManPowerDTO();
				manPowerDTO.setId(manPower.getId());
				manPowerDTO.setTypeOfService(manPower.getTypeOfService());
				manPowerDTO.setPlanned(manPower.getPlanned());
				manPowerDTO.setStartTime(manPower.getStartTime());
				manPowerDTO.setEndTime(manPower.getEndTime());
				manPowerDTOs.add(manPowerDTO);
			}
			for(Material material : materials)
			{
				MaterialDTO materialDTO = new MaterialDTO();
				materialDTO.setId(material.getId());
				materialDTO.setTypeOfService(material.getTypeOfService());
				materialDTO.setMaterialType(material.getMaterialType());
				materialDTO.setCommitmentDate((Date)material.getCommitmentDate());
				materialDTOs.add(materialDTO);
			}
			for(Machines mac : machines)
			{
				MachinesDTO machineDTO = new MachinesDTO();
				machineDTO.setId(mac.getId());
				machineDTO.setTypeOfService(mac.getTypeOfService());
				machineDTO.setMachineType(mac.getEquipmentType());
				machineDTO.setSerialNo(mac.getSerialNo());
				machineDTO.setModelNo(mac.getModelNo());
				machineDTO.setEquipmentType(mac.getEquipmentType());
				machineDTOs.add(machineDTO);
			}
			siteDTO.setMaterialDTO(materialDTOs);
			siteDTO.setMachineDTO(machineDTOs);
			siteDTO.setManPowerDTO(manPowerDTOs);
			siteDTOs.add(siteDTO);
		}

		return siteDTOs;
	}

	public SiteDTO findOne(long id) {
		Site site = new Site();
		site = siteRepository.findOne(id);
		SiteDTO siteDTO = new SiteDTO();
		siteDTO.setId(site.getId());
		siteDTO.setName(site.getName());
		siteDTO.setProjectId(site.getProject().getId());
		siteDTO.setProjectName(site.getProject().getName());
		siteDTO.setAddress(site.getAddress());
		siteDTO.setContractType(site.getContractType());
		siteDTO.setRegionalManagerId(site.getRegionalManagerId());
		siteDTO.setSeniorManagerId(site.getSeniorManagerId());
		siteDTO.setAsstSeniorManagerId(site.getAsstSeniorManagerId());
		siteDTO.setSiteInchargeId(site.getSiteInchargeId());
		List<ManPower> manPowers = site.getManPower();
		List<Material> materials = site.getMaterial();
		List<Machines> machines = site.getMachine();
		List<MaterialDTO> materialDTOs = new ArrayList<MaterialDTO>();
		List<MachinesDTO> machineDTOs = new ArrayList<MachinesDTO>();
		List<ManPowerDTO> manPowerDTOs = new ArrayList<ManPowerDTO>();
		for(ManPower manPower : manPowers)
		{
			ManPowerDTO manPowerDTO = new ManPowerDTO();
			manPowerDTO.setId(manPower.getId());
			manPowerDTO.setTypeOfService(manPower.getTypeOfService());
			manPowerDTO.setPlanned(manPower.getPlanned());
			manPowerDTO.setStartTime(manPower.getStartTime());
			manPowerDTO.setEndTime(manPower.getEndTime());
			manPowerDTOs.add(manPowerDTO);
		}
		for(Material material : materials)
		{
			MaterialDTO materialDTO = new MaterialDTO();
			materialDTO.setId(material.getId());
			materialDTO.setTypeOfService(material.getTypeOfService());
			materialDTO.setMaterialType(material.getMaterialType());
			materialDTO.setCommitmentDate(material.getCommitmentDate());
			materialDTOs.add(materialDTO);
		}
		for(Machines mac : machines)
		{
			MachinesDTO machineDTO = new MachinesDTO();
			machineDTO.setId(mac.getId());
			machineDTO.setTypeOfService(mac.getTypeOfService());
			machineDTO.setMachineType(mac.getEquipmentType());
			machineDTO.setSerialNo(mac.getSerialNo());
			machineDTO.setModelNo(mac.getModelNo());
			machineDTO.setEquipmentType(mac.getEquipmentType());
			machineDTOs.add(machineDTO);
		}
		siteDTO.setMaterialDTO(materialDTOs);
		siteDTO.setMachineDTO(machineDTOs);
		siteDTO.setManPowerDTO(manPowerDTOs);
		return siteDTO;
	}
	
	public List<SiteDTO> findByProjectSite(long id)
	{
		List<Site> sites = siteRepository.findByProject(id);
		List<SiteDTO> siteDTOs = new ArrayList<SiteDTO>();
		for (Site site : sites) {
			SiteDTO siteDTO = new SiteDTO();
			siteDTO.setId(site.getId());
			siteDTO.setName(site.getName());
			siteDTO.setProjectId(site.getProject().getId());
			siteDTO.setProjectName(site.getProject().getName());
			siteDTO.setAddress(site.getAddress());
			siteDTO.setContractType(site.getContractType());
			siteDTO.setRegionalManagerId(site.getRegionalManagerId());
			siteDTO.setSeniorManagerId(site.getSeniorManagerId());
			siteDTO.setAsstSeniorManagerId(site.getAsstSeniorManagerId());
			siteDTO.setSiteInchargeId(site.getSiteInchargeId());
			List<ManPower> manPowers = site.getManPower();
			List<Material> materials = site.getMaterial();
			List<Machines> machines = site.getMachine();
			List<MaterialDTO> materialDTOs = new ArrayList<MaterialDTO>();
			List<MachinesDTO> machineDTOs = new ArrayList<MachinesDTO>();
			List<ManPowerDTO> manPowerDTOs = new ArrayList<ManPowerDTO>();
			for(ManPower manPower : manPowers)
			{
				ManPowerDTO manPowerDTO = new ManPowerDTO();
				manPowerDTO.setId(manPower.getId()); 
				manPowerDTO.setTypeOfService(manPower.getTypeOfService());
				manPowerDTO.setPlanned(manPower.getPlanned());
				manPowerDTO.setStartTime(manPower.getStartTime());
				manPowerDTO.setEndTime(manPower.getEndTime());
				manPowerDTOs.add(manPowerDTO);
			}
			for(Material material : materials)
			{
				MaterialDTO materialDTO = new MaterialDTO();
				materialDTO.setId(material.getId());
				materialDTO.setTypeOfService(material.getTypeOfService());
				materialDTO.setMaterialType(material.getMaterialType());
				materialDTO.setCommitmentDate(material.getCommitmentDate());
				materialDTOs.add(materialDTO);
			}
			for(Machines mac : machines)
			{
				MachinesDTO machineDTO = new MachinesDTO();
				machineDTO.setId(mac.getId());
				machineDTO.setTypeOfService(mac.getTypeOfService());
				machineDTO.setMachineType(mac.getEquipmentType());
				machineDTO.setSerialNo(mac.getSerialNo());
				machineDTO.setModelNo(mac.getModelNo());
				machineDTO.setEquipmentType(mac.getEquipmentType());
				machineDTOs.add(machineDTO);
			}
			siteDTO.setMaterialDTO(materialDTOs);
			siteDTO.setMachineDTO(machineDTOs);
			siteDTO.setManPowerDTO(manPowerDTOs);
			siteDTOs.add(siteDTO);
		}
		return siteDTOs;
	}
	
	public List<String> selectShift(long id)
	{		
		String shift = "";
		List<String> shifts = new ArrayList<String>();
		Site site = siteRepository.findOne(id);
		List<ManPower> manPowers = site.getManPower();
		for(ManPower manPower : manPowers)
		{
			shift = manPower.getStartTime() + "-" + manPower.getEndTime();
			shifts.add(shift);
		}
		return shifts;
	}
}