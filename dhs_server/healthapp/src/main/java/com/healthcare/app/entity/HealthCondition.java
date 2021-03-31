package com.healthcare.app.entity;

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

import com.healthcare.app.dto.HealthConditionDTO;
import com.healthcare.app.dto.HospitalDTO;
import com.healthcare.app.dto.PatientDetailsDTO;
import com.healthcare.app.dto.TreatmentDTO;
import com.sun.istack.NotNull;

@Entity
@Table(name = "HealthCondition")
public class HealthCondition {

	
	
	public HealthCondition() {
		System.out.println("healthcondition entity invoked");
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	private String conditionDetails;

	@NotNull
	private LocalDate dateVisited;

	@ManyToOne
	private PatientDetails patientDetails;

	@OneToMany(targetEntity = Treatment.class, cascade = CascadeType.ALL,mappedBy = "healthConditions")
	private Set<Treatment> treatments = new HashSet<Treatment>();

	
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

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}

	public void setPatientDetails(PatientDetails patientDetails) {
		this.patientDetails = patientDetails;
	}

	public Set<Treatment> getTreatments() {
		return treatments;
	}

	public void setTreatments(Set<Treatment> treatments) {
		this.treatments = treatments;
	}

	public HealthCondition toEntity(HealthConditionDTO healthConditionDTO) {
		HealthCondition healthCondition = new HealthCondition();
		healthCondition.setConditionDetails(healthConditionDTO.getConditionDetails());
		healthCondition.setDateVisited(healthConditionDTO.getDateVisited());
		healthCondition.setId(healthConditionDTO.getId());
		
		PatientDetails patientDetails = new PatientDetails();
		patientDetails = patientDetails.toEntity(healthConditionDTO.getPatientDetails());
		healthCondition.setPatientDetails(patientDetails);
		
		Set<Treatment> treatments = new HashSet<>();
		
		Set<TreatmentDTO> treatmentDto =  healthConditionDTO.getTreatments();
		for (TreatmentDTO treatmentDTO2 : treatmentDto) {
			Treatment treatment = new Treatment();
			treatment.setTreatmentDetails(treatmentDTO2.getTreatmentDetails());
			treatment.setHealthConditions(healthCondition);
			treatments.add(treatment);
		}
		
		healthCondition.setTreatments(treatments);
		
		
		return healthCondition;
	}

	public HealthConditionDTO toDto(HealthCondition healthCondition)

	{
		HealthConditionDTO healthConditionDTO = new HealthConditionDTO();
		healthConditionDTO.setConditionDetails(healthCondition.getConditionDetails());
		healthConditionDTO.setDateVisited(healthCondition.getDateVisited());
		healthConditionDTO.setId(healthCondition.getId());

		PatientDetailsDTO patientDetailsDTO = new PatientDetails().toDto(healthCondition.getPatientDetails());
		healthConditionDTO.setPatientDetails(patientDetailsDTO);
		
		return healthConditionDTO;

	}
}
