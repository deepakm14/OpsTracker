package com.uds.dto;

public class MaterialDTO {

	private long id;
	
	private String materialType;
	
	private String commitmentDate;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMaterialType() {
		return materialType;
	}

	public void setMaterialType(String materialType) {
		this.materialType = materialType;
	}

	public String getCommitmentDate() {
		return commitmentDate;
	}

	public void setCommitmentDate(String commitmentDate) {
		this.commitmentDate = commitmentDate;
	}

}
