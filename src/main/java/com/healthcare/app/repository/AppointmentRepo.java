	package com.healthcare.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.app.entity.Appointment;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {

	List<Appointment> findByPatientDetailsId(Long petientId);

	List<Appointment> findByPatientDetailsIdAndDoctorId(Long petientId, Long doctorId);

	List<Appointment> findByPatientDetailsIdAndDoctorIdAndAppointmentDate(long id, Long id2, LocalDate now);

	List<Appointment> findByDoctorId(Long id);

}
	
	
	
//	@Query(value = "select d.id,a.appointment_date,p.first_name,p.last_name,h.hospital_name,d.first_name,a.doctor_id\r\n" + 
//			"from doctor d,appointment a,hospitals h,patient_details p\r\n" + 
//			"where d.id =a.doctor_id and a.hospital_id=h.id and a.patient_details_id=p.id", 
//  countQuery = "SELECT count(*) FROM Users", 
//  nativeQuery = true)
	
	
		