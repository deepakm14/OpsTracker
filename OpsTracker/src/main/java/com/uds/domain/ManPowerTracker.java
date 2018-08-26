package com.uds.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "manpowertracker")
public class ManPowerTracker implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private long planned;
	
	private int actual;
	
	private int shortfall;
	
	private Date createdDate;
	
	private Date submitDate;
	
	private int totalNoOfRelievers;
	
	private String shiftTime;
	
	private long projectId;
	
	private long siteId;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getPlanned() {
		return planned;
	}

	public void setPlanned(long planned) {
		this.planned = planned;
	}

	public int getActual() {
		return actual;
	}

	public void setActual(int actual) {
		this.actual = actual;
	}

	public int getShortfall() {
		return shortfall;
	}

	public void setShortfall(int shortfall) {
		this.shortfall = shortfall;
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

	public int getTotalNoOfRelievers() {
		return totalNoOfRelievers;
	}

	public void setTotalNoOfRelievers(int totalNoOfRelievers) {
		this.totalNoOfRelievers = totalNoOfRelievers;
	}

	public String getShiftTime() {
		return shiftTime;
	}

	public void setShiftTime(String shiftTime) {
		this.shiftTime = shiftTime;
	}

	public long getProjectId() {
		return projectId;
	}

	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}

	public long getSiteId() {
		return siteId;
	}

	public void setSiteId(long siteId) {
		this.siteId = siteId;
	}	
	
}
