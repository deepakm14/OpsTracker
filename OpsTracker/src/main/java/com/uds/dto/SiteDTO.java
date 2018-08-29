package com.uds.dto;

import java.util.List;

public class SiteDTO {

	private long id;
	
	private String name;
	
	private long projectId;
	
	private String projectName;
	
	private String address;
	
	private String contractType;
	
	private long regionalManagerId;
	
	private long seniorManagerId;
	
	private long asstSeniorManagerId;
	
	private long siteInchargeId;
	
	private List<ManPowerDTO> manPowerDTO;
	
	private List<MaterialDTO> materialDTO;
	
	private List<MachinesDTO> machineDTO;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getProjectId() {
		return projectId;
	}

	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public long getRegionalManagerId() {
		return regionalManagerId;
	}

	public void setRegionalManagerId(long regionalManagerId) {
		this.regionalManagerId = regionalManagerId;
	}

	public long getSeniorManagerId() {
		return seniorManagerId;
	}

	public void setSeniorManagerId(long seniorManagerId) {
		this.seniorManagerId = seniorManagerId;
	}

	public long getAsstSeniorManagerId() {
		return asstSeniorManagerId;
	}

	public void setAsstSeniorManagerId(long asstSeniorManagerId) {
		this.asstSeniorManagerId = asstSeniorManagerId;
	}

	public long getSiteInchargeId() {
		return siteInchargeId;
	}

	public void setSiteInchargeId(long siteInchargeId) {
		this.siteInchargeId = siteInchargeId;
	}

	public List<ManPowerDTO> getManPowerDTO() {
		return manPowerDTO;
	}

	public void setManPowerDTO(List<ManPowerDTO> manPowerDTO) {
		this.manPowerDTO = manPowerDTO;
	}

	public List<MaterialDTO> getMaterialDTO() {
		return materialDTO;
	}

	public void setMaterialDTO(List<MaterialDTO> materialDTO) {
		this.materialDTO = materialDTO;
	}

	public List<MachinesDTO> getMachineDTO() {
		return machineDTO;
	}

	public void setMachineDTO(List<MachinesDTO> machineDTO) {
		this.machineDTO = machineDTO;
	}

}
