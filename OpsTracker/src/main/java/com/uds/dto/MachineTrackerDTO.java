package com.uds.dto;

import java.sql.Date;

public class MachineTrackerDTO {

	private long id;
	
	private String machineType;
	
	private String equipmentType;
	
	private String modelNo;
	
	private String serialNo;
		
	private String status;
	
	private Date complaintRaisedDate;
	
	private Date ResolutionDate;

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

	public String getEquipmentType() {
		return equipmentType;
	}

	public void setEquipmentType(String equipmentType) {
		this.equipmentType = equipmentType;
	}

	public String getModelNo() {
		return modelNo;
	}

	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}

	public String getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getComplaintRaisedDate() {
		return complaintRaisedDate;
	}

	public void setComplaintRaisedDate(Date complaintRaisedDate) {
		this.complaintRaisedDate = complaintRaisedDate;
	}

	public Date getResolutionDate() {
		return ResolutionDate;
	}

	public void setResolutionDate(Date resolutionDate) {
		ResolutionDate = resolutionDate;
	}

}
