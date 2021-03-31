package com.healthcare.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.healthcare.app.dto.DoctorDTO;
import com.healthcare.app.dto.HospitalDTO;

@Entity
@Table(name = "doctor")
public class Doctor {
	//identity
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String firstName;

	private String lastName;

	@Email
	@Column(nullable = false, unique = true)
	private String emailId;

	private String speciality;

	@Column(nullable = false)
	private String qualification;
	 
	@Column(nullable = false)
	private String password;

	@OneToOne
	private Hospital hospital;

	private boolean active;

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	public Doctor toEntity(DoctorDTO doctorDTO) {
		Doctor doctor = new Doctor();
		doctor.setActive(doctorDTO.isActive());
		doctor.setId(doctorDTO.getId());
		doctor.setEmailId(doctorDTO.getEmailId());
		doctor.setFirstName(doctorDTO.getFirstName());
		doctor.setLastName(doctorDTO.getLastName());
		doctor.setPassword(doctorDTO.getPassword());
		doctor.setQualification(doctorDTO.getQualification());
		doctor.setSpeciality(doctorDTO.getSpeciality());
		Hospital hospital = new Hospital();
		hospital = hospital.toEntity(doctorDTO.getHospital());
		doctor.setHospital(hospital);
		return doctor;
	}

	public DoctorDTO toDto(Doctor doctor) {
		DoctorDTO doctorDto = new DoctorDTO();
		doctorDto.setActive(doctor.isActive());
		doctorDto.setId(doctor.getId());
		doctorDto.setEmailId(doctor.getEmailId());
		doctorDto.setFirstName(doctor.getFirstName());
		doctorDto.setLastName(doctor.getLastName());
		doctorDto.setQualification(doctor.getQualification());
		doctorDto.setSpeciality(doctor.getSpeciality());
		doctor.setPassword(doctorDto.getPassword());
		HospitalDTO hospitalDTO = new Hospital().toDto(doctor.getHospital());
		doctorDto.setHospital(hospitalDTO);
		return doctorDto;
	}
	
}
