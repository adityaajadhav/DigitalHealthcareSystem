package com.healthcare.app.dto;

public class TreatmentDTO {
	private long id;

	private String treatmentDetails;

	private HealthConditionDTO healthConditions;

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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public HealthConditionDTO getHealthConditions() {
		return healthConditions;
	}

	public void setHealthConditions(HealthConditionDTO healthConditions) {
		this.healthConditions = healthConditions;
	}

	

}
