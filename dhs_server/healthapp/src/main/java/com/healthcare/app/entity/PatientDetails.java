package com.healthcare.app.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.healthcare.app.dto.PatientDetailsDTO;
import com.sun.istack.NotNull;

@Entity
@Table(name = "PatientDetails")
public class PatientDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	private String firstName;

	@NotNull
	private String lastName;

	
	@Column(unique = true)
	@NotNull
	private String contactNo;

	@Enumerated(EnumType.STRING)
	private BloodGroup bloodGroup;

	
	
	@Column(unique = true)
	@Size(min = 16,max = 16)
	@NotNull 
	private String addharNo;
	
	@Column(unique = true)
	private String emailId;
	 
	@Size(min = 6,max = 16) 
	@NotBlank
	private String password;
	
	@NotNull
	private String address;
	//mappedBy-->always on "@One" side || 
	//can not write @Jointable @Joincolumn <-- otherwise it will throw 
	//association marked as @mappedBy must not dot define mapping like<-- 
	@OneToMany(mappedBy = "patientDetails",targetEntity = HealthCondition.class, cascade = CascadeType.REFRESH)
	private Set<HealthCondition> healthCondition = new HashSet<HealthCondition>();

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public BloodGroup getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(BloodGroup bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getAddharNo() {
		return addharNo;
	}

	public void setAddharNo(String addharNo) {
		this.addharNo = addharNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Set<HealthCondition> getHealthCondition() {
		return healthCondition;
	}

	public void setHealthCondition(Set<HealthCondition> healthCondition) {
		this.healthCondition = healthCondition;
	}

	public PatientDetailsDTO toDto(PatientDetails patientDetails) {
		PatientDetailsDTO patientDetailsDTO = new PatientDetailsDTO();
		if(patientDetails.getAddharNo() != null) {
		patientDetailsDTO.setAddharNo(patientDetails.getAddharNo());
		}
		patientDetailsDTO.setAddress(patientDetails.getAddress());
		patientDetailsDTO.setBloodGroup(patientDetails.getBloodGroup());
		patientDetailsDTO.setContactNo(patientDetails.getContactNo());
		patientDetailsDTO.setEmailId(patientDetails.getEmailId());
		patientDetailsDTO.setFirstName(patientDetails.getFirstName());
		patientDetailsDTO.setId(patientDetails.getId());
		patientDetailsDTO.setLastName(patientDetails.getLastName());
		patientDetailsDTO.setPassword(patientDetails.getPassword());
		return patientDetailsDTO;

	}
	
	public PatientDetails toEntity(PatientDetailsDTO patientDetailsDTO) {
		PatientDetails patientDetails = new PatientDetails();
		patientDetails.setAddharNo(patientDetailsDTO.getAddharNo());
		patientDetails.setAddress(patientDetailsDTO.getAddress());
		patientDetails.setBloodGroup(patientDetailsDTO.getBloodGroup());
		patientDetails.setContactNo(patientDetailsDTO.getContactNo());
		patientDetails.setEmailId(patientDetailsDTO.getEmailId());
		patientDetails.setFirstName(patientDetailsDTO.getFirstName());
		patientDetails.setId(patientDetailsDTO.getId());
		patientDetails.setLastName(patientDetailsDTO.getLastName());
		patientDetails.setPassword(patientDetailsDTO.getPassword());
		return patientDetails;

	}


}
