package com.healthcare.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.TreatmentDTO;
import com.healthcare.app.entity.Treatment;
import com.healthcare.app.repository.TreatmentRepository;

@Service
public class TreatmentService {
	@Autowired
	TreatmentRepository repo;

	public List<TreatmentDTO> findAll() {
		List<Treatment> treatments = repo.findAll();
		List<TreatmentDTO> treatmentDTOs = new ArrayList<>();
		for (Treatment treatment : treatments) {
			treatmentDTOs.add(treatment.toDTO(treatment));
		}
		return treatmentDTOs;

	}

	public TreatmentDTO saveTreatment(TreatmentDTO treatmentDTO) {
		Treatment treatment = new Treatment();
		treatment = repo.save(treatment.toEntity(treatmentDTO));
		return treatment.toDTO(treatment);
	}

	public TreatmentDTO findTreatmentById(Long id) {
		Optional<Treatment> treatment = repo.findById(id);
		if (treatment.isPresent()) {
			return treatment.get().toDTO(treatment.get());
		}
		return new TreatmentDTO();
	}

	public void deleteTreatment(Long id) {
		Optional<Treatment> treatment = repo.findById(id);
		if (treatment.isPresent()) {
			repo.deleteById(id);
		}
	}

	public TreatmentDTO updateTreatment(TreatmentDTO treatmentDTO) {
		Treatment treatment = new Treatment();
		treatment = repo.save(treatment.toEntity(treatmentDTO));
		return treatment.toDTO(treatment);
	}
	
	public List<TreatmentDTO> findByHealthCondition(Long id) {
		List<Treatment> treatments = repo.findByHealthConditionsPatientDetailsId(id);
		List<TreatmentDTO> treatmentDTOs = new ArrayList<>();
		for (Treatment treatment : treatments) {
			treatmentDTOs.add(treatment.toDTO(treatment));
		}
		return treatmentDTOs;

	}

}
