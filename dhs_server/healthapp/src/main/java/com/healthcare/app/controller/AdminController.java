package com.healthcare.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.app.dto.AdminDTO;
import com.healthcare.app.entity.Admin;
import com.healthcare.app.service.AdminService;
import com.healthcare.app.service.DoctorService;
import com.healthcare.app.service.PatientService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
	@Autowired
	private AdminService service;
	
	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private PatientService patientService;
	
	public AdminController() {
		System.out.println("Admin  invoked");
	}
	
	@GetMapping("/get-all")
	public List<Admin> findAll() {
		System.out.println("Admin find all invoked");
        return service.findAll();
    }
	
  
 @PostMapping("/save")
	public Admin saveDoctor(@RequestBody Admin admin) {
		return service.saveAdmin(admin);
	}
 
	@PostMapping("/login")
	public ResponseEntity<?> findEmailAndPassword(@RequestBody AdminDTO adminDTO) {
		
		System.out.println(adminDTO.toString());
		try {
			if (adminDTO.isAdmin()) {
				return new ResponseEntity<>(service.findEmailAndPassword(adminDTO.getEmailId(), adminDTO.getPassword()),
						HttpStatus.OK);
			} else if (adminDTO.isDoctor()) {
				return new ResponseEntity<>(
						doctorService.findEmailAndPassword(adminDTO.getEmailId(), adminDTO.getPassword()),
						HttpStatus.OK);
			} else if (adminDTO.isPatient()) {
				return new ResponseEntity<>(
						patientService.findEmailAndPassword(adminDTO.getEmailId(), adminDTO.getPassword()),
						HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Invalid Type Selected", HttpStatus.NOT_FOUND);
			}
		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}
}
