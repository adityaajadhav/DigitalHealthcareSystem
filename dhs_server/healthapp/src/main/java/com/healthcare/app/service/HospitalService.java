package com.healthcare.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.DoctorDTO;
import com.healthcare.app.dto.HospitalDTO;
import com.healthcare.app.entity.Doctor;
import com.healthcare.app.entity.Hospital;
import com.healthcare.app.exceptios.ExceptionHandeling;
import com.healthcare.app.repository.HospitalRepository;

@Service
public class HospitalService {
	@Autowired
	HospitalRepository repo;

	public List<Hospital> findAll() {
		return repo.findAll();
	}

	public HospitalDTO saveHospital(HospitalDTO hospitalDTO) {
		Hospital hospital = new Hospital();
		hospital = repo.save(hospital.toEntity(hospitalDTO));
		return hospital.toDto(hospital);
	}

	public void deleteHospital(Long id) {
		Optional<Hospital> hospital = repo.findById(id);
		if (hospital.isPresent()) {
			repo.deleteById(id);
		}

	}

	public HospitalDTO updateHospital(HospitalDTO hospitalDTO) {
		Hospital hospital = new Hospital();
		hospital = repo.save(hospital.toEntity(hospitalDTO));
		return hospital.toDto(hospital);
	}

	public HospitalDTO findHospitalById(Long id) {
		Hospital hospital = repo.findHospitalById(id);
		if(hospital==null) {
			throw new  ExceptionHandeling("invalid id");
		}
		if (hospital!=null) {
			return hospital.toDto(hospital);
		}
		return new HospitalDTO();
		
	}

	

	
//	public HospitalDTO updateHospital(HospitalDTO hospitalDTO) {
//		Hospital hospital = new Hospital();
//		Optional<HospitalDTO> hospitalDTO = repo.findById(id);
//		if (hospital.isPresent()) {
//			hospital = repo.save(hospital.toEntity(hospitalDTO));
//			
//		}
//		return hospitalDTO;
//	}
//
//	public HospitalDTO updateHospital(Hospital hospital) {
//		HospitalDTO hospitalDTO = new HospitalDTO();
//		Optional<Hospital> hospital = repo.findById(id);
//		if (hospital.isPresent()) {
//		 
//		 hospital.get().toEntity.(hospitalDTO.get());
//			}
//		return hospitalDTO;
//	}
	
	


//	@Override
//	public User updateGuestDetails(int guestId, User g) {
//		Optional<User> optionalGuest = guestRepo.findById(guestId);
//		User Guest = optionalGuest.orElseThrow(() -> new ResourceNotFoundException("invalid User id:updation failed"));
//		Guest.setFirstName(g.getFirstName());
//		Guest.setLastName(g.getLastName());
//		Guest.setEmailAddress(g.getEmailAddress());
//		Guest.setPassword(g.getPassword());
//		Guest.setPhoneNumber(g.getPhoneNumber());
//		return guestRepo.save(Guest);
//	}

}
