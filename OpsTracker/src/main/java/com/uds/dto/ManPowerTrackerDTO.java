package com.uds.dto;

import java.sql.Date;

public class ManPowerTrackerDTO {

	private long id;
	
	private long planned;
	
	private int actual;
	
	private int shortfall;
	
	private int continuedWithOt;
	
	private int continuedWithOutOt;
	
	private int newComer;
	
	private Date createdDate;
	
	private Date submitDate;
	
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

	public int getContinuedWithOutOt() {
		return continuedWithOutOt;
	}

	public void setContinuedWithOutOt(int continuedWithOutOt) {
		this.continuedWithOutOt = continuedWithOutOt;
	}

	public int getNewComer() {
		return newComer;
	}

	public void setNewComer(int newComer) {
		this.newComer = newComer;
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

	public int getContinuedWithOt() {
		return continuedWithOt;
	}

	public void setContinuedWithOt(int continuedWithOt) {
		this.continuedWithOt = continuedWithOt;
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
