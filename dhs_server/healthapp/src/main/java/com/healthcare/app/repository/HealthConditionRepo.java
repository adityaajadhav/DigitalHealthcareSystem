package com.healthcare.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.app.entity.HealthCondition;
import com.sun.xml.bind.v2.model.core.ID;

@Repository
public interface HealthConditionRepo extends JpaRepository<HealthCondition,Long>{

	List<HealthCondition> findByPatientDetailsId(Long id);

}
