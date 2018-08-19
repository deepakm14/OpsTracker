package com.uds.dto;

import java.util.Date;

public class SearchOptionDTO {

	private long id;
	
	private boolean name;
	
	private boolean findAll;
	
	private boolean findBySite;
	
	private Date toDate;
	
	private Date fromDate;
	
	private boolean material;
	
	private boolean machine;
	
	private boolean manpower;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isName() {
		return name;
	}

	public void setName(boolean name) {
		this.name = name;
	}

	public boolean isFindAll() {
		return findAll;
	}

	public void setFindAll(boolean findAll) {
		this.findAll = findAll;
	}

	public boolean isFindBySite() {
		return findBySite;
	}

	public void setFindBySite(boolean findBySite) {
		this.findBySite = findBySite;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public boolean isMaterial() {
		return material;
	}

	public void setMaterial(boolean material) {
		this.material = material;
	}

	public boolean isMachine() {
		return machine;
	}

	public void setMachine(boolean machine) {
		this.machine = machine;
	}

	public boolean isManpower() {
		return manpower;
	}

	public void setManpower(boolean manpower) {
		this.manpower = manpower;
	}
	
}
