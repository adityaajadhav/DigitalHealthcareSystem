package com.healthcare.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.app.dto.DoctorDTO;
import com.healthcare.app.dto.HospitalDTO;
import com.healthcare.app.entity.Hospital;
import com.healthcare.app.service.HospitalService;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("*")
public class HospitalController {
	@Autowired
	private HospitalService service;

	@GetMapping("/get-all")
	public List<Hospital> findAll() {
		return service.findAll();
	}
	
	@PostMapping("/save")
	public HospitalDTO saveHospital(@RequestBody HospitalDTO hospital)
	{
		return service.saveHospital(hospital);
	}

	@DeleteMapping(value = "/delete/{id}")
	public void deleteHospial(@PathVariable Long id) {
		service.deleteHospital(id);

	}
	
	@PutMapping("/update")
	public HospitalDTO updateHospital(@RequestBody HospitalDTO hospital)
	{
		return service.updateHospital(hospital);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?>  findHospitalById(@PathVariable Long id) {
//		return service.findDoctorById(id);
		try {
			return new ResponseEntity<>(service.findHospitalById(id),HttpStatus.OK);
		}catch(RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}

}
