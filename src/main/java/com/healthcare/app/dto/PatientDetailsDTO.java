package com.healthcare.app.dto;

import java.util.HashSet;
import java.util.Set;

import com.healthcare.app.entity.BloodGroup;
import com.healthcare.app.entity.HealthCondition;

public class PatientDetailsDTO {
	private long id;

	private String firstName;
	
	private String lastName;

	private String contactNo;

	private BloodGroup bloodGroup;

	private String addharNo;

	private String emailId;

	private String address;

	private String password;

	private Set<HealthConditionDTO> healthCondition = new HashSet<HealthConditionDTO>();

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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Set<HealthConditionDTO> getHealthCondition() {
		return healthCondition;
	}

	public void setHealthCondition(Set<HealthConditionDTO> healthCondition) {
		this.healthCondition = healthCondition;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


}
