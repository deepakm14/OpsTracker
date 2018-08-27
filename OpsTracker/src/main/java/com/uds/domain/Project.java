package com.uds.domain;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "project")
public class Project implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	private long projectCode;
	
	private String name;
	
	@JsonIgnore
	@OneToMany(mappedBy = "project")  
    private Set<Site> site;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getProjectCode() {
		return projectCode;
	}

	public void setProjectCode(long projectCode) {
		this.projectCode = projectCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Site> getSite() {
		return site;
	}

	public void setSite(Set<Site> site) {
		this.site = site;
	}
	
	

}
