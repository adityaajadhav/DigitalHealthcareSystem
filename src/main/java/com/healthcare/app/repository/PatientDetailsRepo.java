package com.healthcare.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthcare.app.entity.PatientDetails;

@Repository
public interface PatientDetailsRepo extends JpaRepository<PatientDetails, Long>{
	
	public PatientDetails findByAddharNo(String addharNo);
	
	public Optional<PatientDetails> findById(Long id);

	public boolean existsByEmailId(String emailId);
	@Query("select p from PatientDetails p where p.emailId= :emailId and p.password= :password")
	public Optional<PatientDetails> findEmailAndPassword(String emailId, String password);
	@Query("select p from PatientDetails p where p.addharNo= :addharNo")
	public boolean existByAddharNo(String addharNo);
}
