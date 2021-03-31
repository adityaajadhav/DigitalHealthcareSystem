package com.healthcare.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.AdminDTO;
import com.healthcare.app.dto.DoctorDTO;
import com.healthcare.app.entity.Admin;
import com.healthcare.app.entity.Doctor;
import com.healthcare.app.exceptios.ExceptionHandeling;
import com.healthcare.app.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	AdminRepository repo;

	public List<Admin> findAll() {

		return repo.findAll();
	}

	public Admin saveAdmin(Admin admin) {
		return repo.save(admin);
	}

	public AdminDTO findEmailAndPassword(String emailId, String password) {
		Optional<Admin> admin = repo.findEmailAndPassword(emailId, password);

		if (!admin.isPresent()) {
			throw new ExceptionHandeling("invalid id");
		}
		return admin.get().toDTO(admin.get());

	}
}
