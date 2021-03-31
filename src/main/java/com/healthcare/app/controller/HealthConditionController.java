package com.healthcare.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.app.dto.HealthConditionDTO;
import com.healthcare.app.dto.TreatmentDTO;
import com.healthcare.app.service.HealthConditionService;
import com.healthcare.app.service.TreatmentService;

@RestController
@RequestMapping("/condition")
@CrossOrigin("*")
public class HealthConditionController {
	@Autowired
	private HealthConditionService service;
	
	@Autowired
	TreatmentService treatmentService;
	
	public HealthConditionController() {
		System.out.println("healthcondition invoked");
	}

	@GetMapping("/get-all")
	public List<HealthConditionDTO> findAll() {
		return service.findAll();
	}

	@PostMapping("/save")
	public HealthConditionDTO saveHealthCondition(@RequestBody HealthConditionDTO healthCondition) {
		return service.saveHealthCondition(healthCondition);
	}

	@GetMapping("/{id}")
	public HealthConditionDTO getHealthCondition(@PathVariable Long id) {
		return service.findHealthConditionById(id);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteHealthCondition(@PathVariable Long id) {
		service.deleteHealthCondition(id);

	}

	@PutMapping("/update")
	public HealthConditionDTO updateHealthCondition(@RequestBody HealthConditionDTO healthCondition) {
		return service.updateHealthCondition(healthCondition);
	}

	@GetMapping("/patient/{id}")
	public List<TreatmentDTO> getHealthConditionByPatientId(@PathVariable Long id) {
		return treatmentService.findByHealthCondition(id);
	}
}
