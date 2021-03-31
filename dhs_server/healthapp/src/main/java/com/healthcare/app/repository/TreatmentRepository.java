package com.healthcare.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.app.dto.TreatmentDTO;
import com.healthcare.app.entity.Treatment;
@Repository
public interface TreatmentRepository extends JpaRepository<Treatment, Long> {

	List<Treatment> findByHealthConditionsPatientDetailsId(Long id);

}
