package com.healthcare.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.DoctorDTO;
import com.healthcare.app.entity.Doctor;
import com.healthcare.app.entity.Hospital;
import com.healthcare.app.exceptios.ExceptionHandeling;
import com.healthcare.app.repository.DoctorRepository;
import com.healthcare.app.repository.HospitalRepository;

@Service
public class DoctorService {
	@Autowired
	DoctorRepository repo;
	@Autowired
	HospitalRepository hospitalRepository;

	public List<DoctorDTO> findAll() {
		List<Doctor> doctors = repo.findByActiveTrue();
		List<DoctorDTO> doctorDTOs = new ArrayList<>();
		for (Doctor doctor : doctors) {
			doctorDTOs.add(doctor.toDto(doctor));
		}
		return doctorDTOs;

	}

	// changed
	public DoctorDTO saveDoctor(DoctorDTO doctorDTO) {
		if (repo.existsByEmailId(doctorDTO.getEmailId())) {
			throw new ExceptionHandeling("EmailId already Exist ! ");
		}
		Doctor doctor = new Doctor();
		Hospital hospital = hospitalRepository.findHospitalById(doctorDTO.getHospital().getId());
		doctorDTO.setHospital(hospital.toDto(hospital));
		doctor = repo.save(doctor.toEntity(doctorDTO));
		return doctor.toDto(doctor);
	}

	public DoctorDTO findDoctorById(Long id) {
		// Optional<Doctor> doctor = repo.findById(id).orElseThrow(()->new
		// ExceptionHandeling("invalid id"));

		Optional<Doctor> doctor = repo.findById(id);
		if (!doctor.isPresent()) {
			throw new ExceptionHandeling("invalid id");
		}
		if (doctor.isPresent()) {
			return doctor.get().toDto(doctor.get());
		}
		return new DoctorDTO();

	}

	// public void deleteDoctor(Long id) {
	// Optional<Doctor> doctor = repo.findById(id);
	// if (doctor.isPresent()) {
	// repo.deleteById(id);
	// }
	// }

	public String deleteDoctor(Long id) {
		Doctor doctor = repo.findById(id).orElseThrow(() -> new ExceptionHandeling("invalid id"));

		repo.deleteById(id);
		return "deleted";

	}

	public DoctorDTO updateDoctor(DoctorDTO doctorDTO) {
		if (doctorDTO.getId() == null) {
			throw new ExceptionHandeling("id required ! ");
		}
		if (repo.existsByEmailIdAndIdIsNot(doctorDTO.getEmailId(), doctorDTO.getId())) {
			throw new ExceptionHandeling("EmailId already Exist ! ");
		}
		Doctor doctor = new Doctor();
		Hospital hospital = hospitalRepository.findHospitalById(doctorDTO.getHospital().getId());
		doctorDTO.setHospital(hospital.toDto(hospital));
		doctor = repo.save(doctor.toEntity(doctorDTO));
		return doctor.toDto(doctor);
	}

	public DoctorDTO findByEmailId(String emailId) {
		Doctor doctor = repo.findByEmailId(emailId);
		System.out.println(doctor.getFirstName());
		if (doctor == null) {
			return new DoctorDTO();
		}
		return doctor.toDto(doctor);
	}

	public List<DoctorDTO> findDoctorSByHospitalId(Long HospitalId) {
		List<DoctorDTO> doctorDTOs = new ArrayList<>();
		List<Doctor> doctors = repo.findByHospitalIdAndActiveTrue(HospitalId);
		if (doctors == null) {
			return doctorDTOs;
		}
		for (Doctor doctor : doctors) {
			doctorDTOs.add(doctor.toDto(doctor));
		}
		return doctorDTOs;
	}

	public DoctorDTO findEmailAndPassword(String emailId, String password) {
		Optional<Doctor> doctor = repo.findEmailAndPassword(emailId, password);

		if (!doctor.isPresent()) {
			throw new ExceptionHandeling("invalid user");
		}
		return doctor.get().toDto(doctor.get());

	}

}