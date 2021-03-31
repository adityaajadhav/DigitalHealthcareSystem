package com.healthcare.app.dto;

import java.time.LocalDate;

import com.healthcare.app.entity.AppointmentStatus;

public class AppointmentDTO {
	private long id;

	private AppointmentStatus appointmentStatus;

	private LocalDate appointmentDate;

	private PatientDetailsDTO patientDetails;

	private DoctorDTO doctor;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public AppointmentStatus getAppointmentStatus() {
		return appointmentStatus;
	}

	public void setAppointmentStatus(AppointmentStatus appointmentStatus) {
		this.appointmentStatus = appointmentStatus;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public PatientDetailsDTO getPatientDetails() {
		return patientDetails;
	}

	public void setPatientDetails(PatientDetailsDTO patientDetails) {
		this.patientDetails = patientDetails;
	}

	public DoctorDTO getDoctor() {
		return doctor;
	}

	public void setDoctor(DoctorDTO doctor) {
		this.doctor = doctor;
	}

}
