package com.uds.dto;

public class ManPowerDTO {

	private long id;
	
	private int planned; 
	
	private String startTime;
	
	private String endTime;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getPlanned() {
		return planned;
	}

	public void setPlanned(int planned) {
		this.planned = planned;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
}
