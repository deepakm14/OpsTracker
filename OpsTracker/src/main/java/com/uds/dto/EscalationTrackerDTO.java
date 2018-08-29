package com.uds.dto;

public class EscalationTrackerDTO {

	private long id;
	
	private String typeOfEscalation;
	
	private String description;
	
	private String communicatedVia;
	
	private String communicatedDate;
	
	private String closureDate;
	
	private String estimatedClosureDate;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTypeOfEscalation() {
		return typeOfEscalation;
	}

	public void setTypeOfEscalation(String typeOfEscalation) {
		this.typeOfEscalation = typeOfEscalation;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCommunicatedVia() {
		return communicatedVia;
	}

	public void setCommunicatedVia(String communicatedVia) {
		this.communicatedVia = communicatedVia;
	}

	public String getCommunicatedDate() {
		return communicatedDate;
	}

	public void setCommunicatedDate(String communicatedDate) {
		this.communicatedDate = communicatedDate;
	}

	public String getClosureDate() {
		return closureDate;
	}

	public void setClosureDate(String closureDate) {
		this.closureDate = closureDate;
	}

	public String getEstimatedClosureDate() {
		return estimatedClosureDate;
	}

	public void setEstimatedClosureDate(String estimatedClosureDate) {
		this.estimatedClosureDate = estimatedClosureDate;
	}
	
}
