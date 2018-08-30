package com.uds.domain;

import java.io.Serializable;
import java.util.Date;

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
	
	private String description;
	
	private String communicatedVia;
	
	private Date communicatedDate;
	
	private Date closureDate;
	
	private Date estimatedClosureDate;
	


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

	public String getCommunicatedVia() {
		return communicatedVia;
	}

	public void setCommunicatedVia(String communicatedVia) {
		this.communicatedVia = communicatedVia;
	}

	public Date getCommunicatedDate() {
		return communicatedDate;
	}

	public void setCommunicatedDate(Date communicatedDate) {
		this.communicatedDate = communicatedDate;
	}

	public Date getClosureDate() {
		return closureDate;
	}

	public void setClosureDate(Date closureDate) {
		this.closureDate = closureDate;
	}

	public Date getEstimatedClosureDate() {
		return estimatedClosureDate;
	}

	public void setEstimatedClosureDate(Date estimatedClosureDate) {
		this.estimatedClosureDate = estimatedClosureDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
