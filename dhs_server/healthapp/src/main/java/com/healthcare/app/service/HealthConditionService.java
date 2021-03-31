package com.healthcare.app.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.HealthConditionDTO;
import com.healthcare.app.dto.TreatmentDTO;
import com.healthcare.app.entity.Appointment;
import com.healthcare.app.entity.HealthCondition;
import com.healthcare.app.entity.Treatment;
import com.healthcare.app.repository.AppointmentRepo;
import com.healthcare.app.repository.HealthConditionRepo;

@Service
public class HealthConditionService {
	@Autowired
	HealthConditionRepo repo;
	@Autowired
	AppointmentRepo appointmentRepo;

	@Autowired
	PatientService patientService;

	public List<HealthConditionDTO> findAll() {
		List<HealthCondition> healthConditions = repo.findAll();
		List<HealthConditionDTO> healthConditionDTOs = new ArrayList<>();
		for (HealthCondition healthCondition : healthConditions) {
			healthConditionDTOs.add(healthCondition.toDto(healthCondition));
		}
		return healthConditionDTOs;

	}

	public HealthConditionDTO saveHealthCondition(HealthConditionDTO healthConditionDTO) {
		Optional<Appointment> appointmentopt = appointmentRepo.findById(healthConditionDTO.getAppointmentId());
		Appointment appointment = new Appointment();
		if (appointmentopt.isPresent()) {
			appointment = appointmentopt.get();
			appointment.setAppointmentStatus(healthConditionDTO.getAppointmentStatus());
			appointmentRepo.save(appointment);
		}
		HealthCondition healthCondition = new HealthCondition();
		healthConditionDTO.setPatientDetails(patientService.findById(healthConditionDTO.getPatientDetails().getId()));
		healthCondition = repo.save(healthCondition.toEntity(healthConditionDTO));
		return healthCondition.toDto(healthCondition);
	}

	public HealthConditionDTO findHealthConditionById(Long id) {
		Optional<HealthCondition> healthCondition = repo.findById(id);
		if (healthCondition.isPresent()) {
			return healthCondition.get().toDto(healthCondition.get());
		}
		return new HealthConditionDTO();
	}

	public void deleteHealthCondition(Long id) {
		Optional<HealthCondition> healthCondition = repo.findById(id);
		if (healthCondition.isPresent()) {
			repo.deleteById(id);
		}
	}

	public HealthConditionDTO updateHealthCondition(HealthConditionDTO healthConditionDTO) {
		HealthCondition healthCondition = new HealthCondition();
		healthCondition = repo.save(healthCondition.toEntity(healthConditionDTO));
		return healthCondition.toDto(healthCondition);
	}

	public List<HealthConditionDTO> findByPatientId(Long id) {
		List<HealthCondition> healthConditions = repo.findByPatientDetailsId(id);
		List<HealthConditionDTO> healthConditionDTOs = new ArrayList<>();
		for (HealthCondition healthCondition : healthConditions) {
			HealthConditionDTO healthConditionDTO = healthCondition.toDto(healthCondition);

			Set<TreatmentDTO> treatmentDtos = new HashSet<>();
			for (Treatment treatment : healthCondition.getTreatments()) {
				TreatmentDTO treatmentDto = new TreatmentDTO();
				treatmentDto.setTreatmentDetails(treatment.getTreatmentDetails());
				treatmentDto.setId(treatment.getId());
				treatmentDtos.add(treatmentDto);
			}
			healthConditionDTO.setTreatments(treatmentDtos);
			healthConditionDTOs.add(healthConditionDTO);

		}
		return healthConditionDTOs;
	}

}
