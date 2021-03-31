
package com.healthcare.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.app.dto.AdminDTO;
import com.healthcare.app.dto.DoctorDTO;
import com.healthcare.app.service.DoctorService;
@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {

	@Autowired
	private DoctorService service;

	@GetMapping("/get-all")
	public List<DoctorDTO> findAll() {
		return service.findAll();
	}

	@PostMapping("/save")
	public DoctorDTO saveDoctor(@RequestBody DoctorDTO doctor) {
		return service.saveDoctor(doctor);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?>  getDoctor(@PathVariable Long id) {
//		return service.findDoctorById(id);
		try {
			return new ResponseEntity<>(service.findDoctorById(id),HttpStatus.OK);
		}catch(RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deleteDoctor(@PathVariable Long id) {
		try {
			return new ResponseEntity<>(service.deleteDoctor(id),HttpStatus.OK);
		}catch(RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}

	}

	@PutMapping("/update")
	public DoctorDTO updateDoctor(@RequestBody DoctorDTO doctor) {
		return service.updateDoctor(doctor);
	}
	
	@GetMapping("/email/{emailId}")
	public ResponseEntity<?> findDoctorByEmail(@PathVariable String emailId) {
		try {
			return new ResponseEntity<>(service.findByEmailId(emailId),HttpStatus.OK);

		}catch(RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	
	}
//check
	@GetMapping("/emailIdAndPassword")
	public ResponseEntity<?> findEmailAndPassword(@RequestParam String emailId,@RequestParam String password) {
		try {
			return new ResponseEntity<>(service.findEmailAndPassword(emailId,password),HttpStatus.OK);

		}catch(RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	
	}

	
	@GetMapping("/findbyhospital/{HospitalId}")
	public List<DoctorDTO> findDoctorSByHospitalId(@PathVariable Long HospitalId) {
	return service.findDoctorSByHospitalId(HospitalId);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> findEmailAndPassword(@RequestBody DoctorDTO doctorDTO) {
		try {
			return new ResponseEntity<>(service.findEmailAndPassword(doctorDTO.getEmailId(),doctorDTO.getPassword()),HttpStatus.OK);

		}catch(RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	
 }

}