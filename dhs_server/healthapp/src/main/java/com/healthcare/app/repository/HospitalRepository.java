package com.healthcare.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.healthcare.app.dto.HospitalDTO;
import com.healthcare.app.entity.Hospital;
import com.sun.xml.bind.v2.model.core.ID;
@Repository
public interface HospitalRepository extends JpaRepository<Hospital,Long> {
	public List<Hospital> findAll();
	
	public Hospital findHospitalById(Long id);
	
	
}
