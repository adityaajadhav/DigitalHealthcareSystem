package com.healthcare.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.healthcare.app.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

	List<Doctor> findByActiveTrue();
	//@Query("Select d FROM Doctor d WHERE d.emailId: :emailId")
	Doctor findByEmailId(String emailId);

	List<Doctor> findByHospitalIdAndActiveTrue(Long hospitalId);
	 
	@Query(value ="Select d FROM Doctor d WHERE d.emailId= :emailId and d.password= :password")
	Optional<Doctor> findEmailAndPassword( String emailId, String password);
	
	boolean existsByEmailId(String emailId);
	boolean existsByEmailIdAndIdIsNot(String emailId, Long long1);
	
	}
