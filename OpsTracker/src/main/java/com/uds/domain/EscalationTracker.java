package com.uds.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "esctracker")
public class EscalationTracker  implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	private String typeOfEscalation;
	
	private String communicatedVia;
	
	private String communicatedDate;
	
	private String closureDate;
	
	private String estimatedClosureDate;
	
	private String description;

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

//	public String getDesc() {
//		return desc;
//	}
//
//	public void setDesc(String desc) {
//		this.desc = desc;
//	}

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
