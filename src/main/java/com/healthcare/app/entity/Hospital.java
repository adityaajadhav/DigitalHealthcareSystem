package com.healthcare.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.healthcare.app.dto.HospitalDTO;
import com.sun.istack.NotNull;

@Entity
@Table(name = "Hospitals")
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	private String hospitalName;

	@Column(nullable = false, unique = true)
	private String emailId;

	@Column(nullable = false, unique = true)
	private String hospitalContactNo;

	@NotNull
	private String hospitaladdress;

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getHospitalContactNo() {
		return hospitalContactNo;
	}

	public void setHospitalContactNo(String hospitalContactNo) {
		this.hospitalContactNo = hospitalContactNo;
	}

	public String getHospitaladdress() {
		return hospitaladdress;
	}

	public void setHospitaladdress(String hospitaladdress) {
		this.hospitaladdress = hospitaladdress;
	}

	public Hospital toEntity(HospitalDTO hospitalDTO) {
		Hospital hospital = new Hospital();
		hospital.setEmailId(hospitalDTO.getEmailId());
		hospital.setHospitalName(hospitalDTO.getHospitalName());
		hospital.setHospitaladdress(hospitalDTO.getHospitaladdress());
		hospital.setHospitalContactNo(hospitalDTO.getHospitalContactNo());
	
		if(hospitalDTO.getId()!=null) {
		hospital.setId(hospitalDTO.getId());
		}
		return hospital;
	}

	public HospitalDTO toDto(Hospital hospital) {
		HospitalDTO hospitalDTO = new HospitalDTO();
		hospitalDTO.setEmailId(hospital.getEmailId());
		hospitalDTO.setHospitalName(hospital.getHospitalName());
		hospitalDTO.setHospitaladdress(hospital.getHospitaladdress());
		hospitalDTO.setHospitalContactNo(hospital.getHospitalContactNo());
		hospitalDTO.setId(hospital.getId());
		return hospitalDTO;
	}

}
 
