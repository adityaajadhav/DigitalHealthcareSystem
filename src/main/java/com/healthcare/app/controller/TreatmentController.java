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

import com.healthcare.app.dto.TreatmentDTO;
import com.healthcare.app.service.TreatmentService;

@RestController
@RequestMapping("/treatment")
@CrossOrigin("*")
public class TreatmentController {
	@Autowired
	private TreatmentService service;

	@GetMapping("/get-all")
	public List<TreatmentDTO> findAll() {
		return service.findAll();
	}

	@PostMapping("/save")
	public TreatmentDTO saveTreatment(@RequestBody TreatmentDTO treatment) {
		return service.saveTreatment(treatment);
	}

	@GetMapping("/id/{id}")
	public TreatmentDTO getTreatment(@PathVariable Long id) {
		return service.findTreatmentById(id);
	}

	@DeleteMapping(value = "/delete/{id}")
	public void deleteTreatment(@PathVariable Long id) {
		service.deleteTreatment(id);

	}

	@PutMapping("/update")
	public TreatmentDTO updateTreatment(@RequestBody TreatmentDTO treatment) {
		return service.updateTreatment(treatment);
	}

}
