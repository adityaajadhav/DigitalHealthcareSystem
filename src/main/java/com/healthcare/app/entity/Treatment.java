package com.healthcare.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import com.healthcare.app.dto.HealthConditionDTO;
import com.healthcare.app.dto.TreatmentDTO;

@Entity
public class Treatment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(nullable = false)
	@NotBlank
	private String treatmentDetails;

	@ManyToOne
	private HealthCondition healthConditions;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public HealthCondition getHealthConditions() {
		return healthConditions;
	}

	public void setHealthConditions(HealthCondition healthConditions) {
		this.healthConditions = healthConditions;
	}

	public long getTreatmentId() {
		return id;
	}

	public void setTreatmentId(long treatmentId) {
		this.id = treatmentId;
	}

	public String getTreatmentDetails() {
		return treatmentDetails;
	}

	public void setTreatmentDetails(String treatmentDetails) {
		this.treatmentDetails = treatmentDetails;
	}

	public TreatmentDTO toDTO(Treatment treatment) {
		TreatmentDTO treatmentDTO=new TreatmentDTO();
		treatmentDTO.setTreatmentId(treatment.getTreatmentId());
		treatmentDTO.setTreatmentDetails(treatment.getTreatmentDetails());
		treatmentDTO.setId(treatment.getId());
		
		HealthConditionDTO healthConditionDTO = new HealthCondition().toDto(treatment.getHealthConditions());
		treatmentDTO.setHealthConditions(healthConditionDTO);
		return treatmentDTO;

}
	public Treatment toEntity(TreatmentDTO treatmentDTO) {
		Treatment treatment=new Treatment();
		treatment.setTreatmentId(treatmentDTO.getTreatmentId());
		treatment.setTreatmentDetails(treatmentDTO.getTreatmentDetails());
		treatment.setId(treatmentDTO.getId());
	//	treatment.setHealthConditions(treatmentDTO.getHealthConditions());
	
		HealthCondition healthCondition = new HealthCondition();
		healthCondition = healthCondition.toEntity(treatmentDTO.getHealthConditions());
		treatment.setHealthConditions(healthCondition);
		
		return treatment;
	}

}
