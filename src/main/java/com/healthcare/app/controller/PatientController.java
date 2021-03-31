package com.healthcare.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.app.dto.PatientDetailsDTO;
import com.healthcare.app.service.PatientService;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {
	@Autowired
	PatientService service;

	@PostMapping("/add")
	private PatientDetailsDTO addPatientDetails(@RequestBody PatientDetailsDTO patientDetailsDTO) {
		return service.addPatientDetails(patientDetailsDTO);
	}

	@GetMapping(value = "/get-all")
	public List<PatientDetailsDTO> findAll() {
		return service.findAll();
	}

	@GetMapping(value = "/id/{id}")
	public PatientDetailsDTO findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping("/login")
	public ResponseEntity<?> findEmailAndPassword(@RequestBody PatientDetailsDTO patientDetailsDTO) {
		try {
			return new ResponseEntity<>(
					service.findEmailAndPassword(patientDetailsDTO.getEmailId(), patientDetailsDTO.getPassword()),
					HttpStatus.OK);

		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}

	@PutMapping(value = "/update")
	public PatientDetailsDTO updatePatientDetails(@RequestBody PatientDetailsDTO patientDetailsDTO) {
		return service.updatePatientDetails(patientDetailsDTO);
	}

	@GetMapping("/addhar/{addharNo}")
	public PatientDetailsDTO findByAddharNo(@PathVariable String addharNo) {
		return service.findByAddharNo(addharNo);
	}
}
