package com.uds.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Cacheable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "site")
@Cacheable(true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Site implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private long id;
	
	private String name;
	
	private String address;
	
	private String contractType;
	
	private String typeOfService;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "projectId", nullable = false)
	private Project project;
	
	private long regionalManagerId;
	
	private long seniorManagerId;
	
	private long asstSeniorManagerId;
	
	private long siteInchargeId;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "site", fetch = FetchType.LAZY)
	private List<ManPower> manPower;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "site", fetch = FetchType.LAZY)
	private List<Material> material;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "site", fetch = FetchType.LAZY)
	private List<Machines> machine;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public String getTypeOfService() {
		return typeOfService;
	}

	public void setTypeOfService(String typeOfService) {
		this.typeOfService = typeOfService;
	}

	public long getRegionalManagerId() {
		return regionalManagerId;
	}

	public void setRegionalManagerId(long regionalManagerId) {
		this.regionalManagerId = regionalManagerId;
	}

	public long getSeniorManagerId() {
		return seniorManagerId;
	}

	public void setSeniorManagerId(long seniorManagerId) {
		this.seniorManagerId = seniorManagerId;
	}

	public long getAsstSeniorManagerId() {
		return asstSeniorManagerId;
	}

	public void setAsstSeniorManagerId(long asstSeniorManagerId) {
		this.asstSeniorManagerId = asstSeniorManagerId;
	}

	public long getSiteInchargeId() {
		return siteInchargeId;
	}

	public void setSiteInchargeId(long siteInchargeId) {
		this.siteInchargeId = siteInchargeId;
	}

	public List<ManPower> getManPower() {
		return manPower;
	}

	public void setManPower(List<ManPower> manPower) {
		this.manPower = manPower;
	}

	public List<Material> getMaterial() {
		return material;
	}

	public void setMaterial(List<Material> material) {
		this.material = material;
	}

	public List<Machines> getMachine() {
		return machine;
	}

	public void setMachine(List<Machines> machine) {
		this.machine = machine;
	}
	
}
