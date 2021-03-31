package com.healthcare.app.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.healthcare.app.dto.AppointmentDTO;

import ch.qos.logback.core.subst.Token.Type;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Enumerated(EnumType.STRING)
	private AppointmentStatus appointmentStatus;

	private LocalDate appointmentDate;

	@OneToOne
	private PatientDetails patientDetails;

	@ManyToOne
	private Doctor doctor;

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

	public PatientDetails getPatientDetails() {
		return patientDetails;
	}

	public void setPatientDetails(PatientDetails patientDetails) {
		this.patientDetails = patientDetails;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Appointment toEntity(AppointmentDTO appointmentDTO) {
		Appointment appointment = new Appointment();

		appointment.setAppointmentDate(appointmentDTO.getAppointmentDate());
		appointment.setAppointmentStatus(appointmentDTO.getAppointmentStatus());

		return appointment;

	}

	public Appointment toEntityNested(AppointmentDTO appointmentDTO) {
		Appointment appointment = new Appointment();

		appointment.setAppointmentDate(appointmentDTO.getAppointmentDate());
		appointment.setAppointmentStatus(appointmentDTO.getAppointmentStatus());

		// patient convert
		appointment.setPatientDetails(patientDetails.toEntity(appointmentDTO.getPatientDetails()));

		// doctor hospital convert
		appointment.setDoctor(doctor.toEntity(appointmentDTO.getDoctor()));
		return appointment;

	}

	public AppointmentDTO toDto(Appointment appointment) {
		AppointmentDTO appointmentDTO = new AppointmentDTO();
		// chnges
		appointmentDTO.setAppointmentDate(appointment.getAppointmentDate());
		appointmentDTO.setAppointmentStatus(appointment.getAppointmentStatus());
		appointmentDTO.setId(appointment.getId());

		// patient convert
		PatientDetails patientDetails = new PatientDetails();
		appointmentDTO.setPatientDetails(patientDetails.toDto(appointment.getPatientDetails()));

		// doctor hospital convert
		Doctor doctor = new Doctor();
		appointmentDTO.setDoctor(doctor.toDto(appointment.getDoctor()));
		return appointmentDTO;

	}
}