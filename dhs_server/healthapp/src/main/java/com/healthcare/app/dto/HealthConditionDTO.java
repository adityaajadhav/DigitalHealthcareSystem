package com.healthcare.app.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.healthcare.app.entity.AppointmentStatus;
import com.healthcare.app.entity.PatientDetails;
import com.healthcare.app.entity.Treatment;
import com.sun.istack.NotNull;

public class HealthConditionDTO {

	public HealthConditionDTO() {
		System.out.println("healthcondition DTO invoked");
	}
	
	
	private long id;

	private String conditionDetails;

	private LocalDate dateVisited;

	private PatientDetailsDTO patientDetails;

	private Set<TreatmentDTO> treatments = new HashSet<TreatmentDTO>();
	private long appointmentId;

	private AppointmentStatus appointmentStatus;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getConditionDetails() {
		return conditionDetails;
	}

	public void setConditionDetails(String conditionDetails) {
		this.conditionDetails = conditionDetails;
	}

	public LocalDate getDateVisited() {
		return dateVisited;
	}

	public void setDateVisited(LocalDate dateVisited) {
		this.dateVisited = dateVisited;
	}

	
	public PatientDetailsDTO getPatientDetails() {
		return patientDetails;
	}

	public void setPatientDetails(PatientDetailsDTO patientDetails) {
		this.patientDetails = patientDetails;
	}

	public Set<TreatmentDTO> getTreatments() {
		return treatments;
	}

	public void setTreatments(Set<TreatmentDTO> treatments) {
		this.treatments = treatments;
	}

	public long getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(long appointmentId) {
		this.appointmentId = appointmentId;
	}

	public AppointmentStatus getAppointmentStatus() {
		return appointmentStatus;
	}

	public void setAppointmentStatus(AppointmentStatus appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}

	

}
