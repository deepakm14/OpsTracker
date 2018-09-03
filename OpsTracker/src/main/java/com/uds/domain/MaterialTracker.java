package com.uds.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "materialtracker")
public class MaterialTracker implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String materialType;
	
	private Date commitmentDate;
	
	private Date indentSubmissionDate;
	
	private Date materialSupplyDate;
	
	private Date uniformSupplyDate;
	
	private Date createdDate;
	
	private Date submitDate;
	
	private String status;
	
	private String remarks;
	
	private long siteId;

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

	public Date getCommitmentDate() {
		return commitmentDate;
	}

	public void setCommitmentDate(Date commitmentDate) {
		this.commitmentDate = commitmentDate;
	}

	public Date getIndentSubmissionDate() {
		return indentSubmissionDate;
	}

	public void setIndentSubmissionDate(Date indentSubmissionDate) {
		this.indentSubmissionDate = indentSubmissionDate;
	}

	public Date getMaterialSupplyDate() {
		return materialSupplyDate;
	}

	public void setMaterialSupplyDate(Date materialSupplyDate) {
		this.materialSupplyDate = materialSupplyDate;
	}

	public Date getUniformSupplyDate() {
		return uniformSupplyDate;
	}

	public void setUniformSupplyDate(Date uniformSupplyDate) {
		this.uniformSupplyDate = uniformSupplyDate;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getSubmitDate() {
		return submitDate;
	}

	public void setSubmitDate(Date submitDate) {
		this.submitDate = submitDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public long getSiteId() {
		return siteId;
	}

	public void setSiteId(long siteId) {
		this.siteId = siteId;
	}
	
}
