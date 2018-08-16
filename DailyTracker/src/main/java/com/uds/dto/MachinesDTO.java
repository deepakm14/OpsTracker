package com.uds.dto;

public class MachinesDTO {

	private long id;
	
	private String machineType;
	
	private long modelNo;
	
	private long serialNo;
	
	private String equipmentType;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMachineType() {
		return machineType;
	}

	public void setMachineType(String machineType) {
		this.machineType = machineType;
	}

	public long getModelNo() {
		return modelNo;
	}

	public void setModelNo(long modelNo) {
		this.modelNo = modelNo;
	}

	public long getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(long serialNo) {
		this.serialNo = serialNo;
	}

	public String getEquipmentType() {
		return equipmentType;
	}

	public void setEquipmentType(String equipmentType) {
		this.equipmentType = equipmentType;
	}
	
}
