package com.healthcare.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.PatientDetailsDTO;
import com.healthcare.app.dto.PatientDetailsDTO;
import com.healthcare.app.entity.Admin;
import com.healthcare.app.entity.PatientDetails;
import com.healthcare.app.exceptios.ExceptionHandeling;
import com.healthcare.app.repository.PatientDetailsRepo;

@Service
public class PatientService {
	@Autowired
	PatientDetailsRepo repo;

	public PatientDetailsDTO addPatientDetails(PatientDetailsDTO patientDetailsDTO) {

		if (repo.existsByEmailId(patientDetailsDTO.getEmailId())) {
			throw new ExceptionHandeling("Patient details with same emailID already exist!");
		}
		// if (repo.existByAddharNo(patientDetailsDTO.getAddharNo())) {
		// throw new ExceptionHandeling("Patient details with same Addhar already
		// exist!");
		// }

		PatientDetails patientDetails = new PatientDetails();
		patientDetails = repo.save(patientDetails.toEntity(patientDetailsDTO));
		return patientDetails.toDto(patientDetails);
	}

	public List<PatientDetailsDTO> findAll() {
		List<PatientDetails> patientDetail = repo.findAll();
		List<PatientDetailsDTO> patientDetailsDTOs = new ArrayList<PatientDetailsDTO>();
		for (PatientDetails patientDetails : patientDetail) {
			patientDetailsDTOs.add(patientDetails.toDto(patientDetails));
		}
		return patientDetailsDTOs;
	}

	public PatientDetailsDTO findById(Long id) {
		Optional<PatientDetails> patientDetails = repo.findById(id);
		if (patientDetails.isPresent()) {
			return patientDetails.get().toDto(patientDetails.get());
		}

		return new PatientDetailsDTO();
	}

	public PatientDetailsDTO updatePatientDetails(PatientDetailsDTO patientDetailsDTO) {
		PatientDetails patientDetails = new PatientDetails();
		patientDetails = repo.save(patientDetails.toEntity(patientDetailsDTO));
		return patientDetails.toDto(patientDetails);

	}

	public PatientDetailsDTO findByAddharNo(String addharNo) {
		PatientDetails patientDetails = repo.findByAddharNo(addharNo);
		if (patientDetails != null) {
			return patientDetails.toDto(patientDetails);
		}

		return new PatientDetailsDTO();
	}

	public PatientDetailsDTO findEmailAndPassword(String emailId, String password) {
		Optional<PatientDetails> patientDetails = repo.findEmailAndPassword(emailId, password);

		if (!patientDetails.isPresent()) {
			throw new ExceptionHandeling("invalid user");
		}
		return patientDetails.get().toDto(patientDetails.get());
	}
}