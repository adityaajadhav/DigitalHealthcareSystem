package com.healthcare.app.service;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.app.dto.AppointmentDTO;
import com.healthcare.app.entity.Appointment;
import com.healthcare.app.entity.Doctor;
import com.healthcare.app.entity.PatientDetails;
import com.healthcare.app.exceptios.ExceptionHandeling;
import com.healthcare.app.repository.AppointmentRepo;
import com.healthcare.app.repository.DoctorRepository;
import com.healthcare.app.repository.PatientDetailsRepo;

@Service
public class AppointmentService {
	@Autowired
	AppointmentRepo appointmentRepo;

	@Autowired
	DoctorRepository doctorRepository;

	@Autowired
	PatientDetailsRepo patientDetailsRepo;

	public AppointmentDTO bookAppointment(AppointmentDTO appointmentDTO) {

		Appointment appointment = new Appointment();

		List<Appointment> appointments = appointmentRepo.findByPatientDetailsIdAndDoctorIdAndAppointmentDate(
				appointmentDTO.getPatientDetails().getId(), appointmentDTO.getDoctor().getId(),LocalDate.now());
		
		if(appointments.size() >= 30) {
			throw new ExceptionHandeling("Appointment is not available!");
		}

		appointment = customConvertToEntiry(appointmentDTO, appointment);

		appointment = appointmentRepo.save(appointment);

		return appointment.toDto(appointment);

	}

	private Appointment customConvertToEntiry(AppointmentDTO appointmentDTO, Appointment appointment) {

		appointment.setAppointmentStatus(appointmentDTO.getAppointmentStatus());
		appointment.setAppointmentDate(appointmentDTO.getAppointmentDate());
		
		Optional<PatientDetails> patientDetails = patientDetailsRepo
				.findById(appointmentDTO.getPatientDetails().getId());
		if (patientDetails.isPresent()) {
			appointment.setPatientDetails(patientDetails.get());
		}

		Optional<Doctor> doctor = doctorRepository.findById(appointmentDTO.getDoctor().getId());

		if (doctor.isPresent()) {
			appointment.setDoctor(doctor.get());
		}
		return appointment;
	}

	public AppointmentDTO getAppointmentById(Long id) {

		Appointment appointment = new Appointment();

		Optional<Appointment> appointmentopt = appointmentRepo.findById(id);

		if (appointmentopt.isPresent()) {

			return appointment.toDto(appointmentopt.get());
		}

		return new AppointmentDTO();

	}

	public List<AppointmentDTO> getAppointmentByPetientId(Long petientId) {

		List<AppointmentDTO> appointmentDTOs = new ArrayList<>();
		List<Appointment> appointmentopt = appointmentRepo.findByPatientDetailsId(petientId);
		for (Appointment appointment : appointmentopt) {
			appointmentDTOs.add(appointment.toDto(appointment));
		}

		return appointmentDTOs;

	}

	public List<AppointmentDTO> getAppointmentByPetientIdAndDoctorId(Long petientId, Long doctorId) {

		List<AppointmentDTO> appointmentDTOs = new ArrayList<>();

		List<Appointment> appointmentopt = appointmentRepo.findByPatientDetailsIdAndDoctorId(petientId, doctorId);
		for (Appointment appointment : appointmentopt) {
			appointmentDTOs.add(appointment.toDto(appointment));
		}

		return appointmentDTOs;

	}

	public List<AppointmentDTO> getAppointmentByDoctorId(Long id) {
		// TODO Auto-generated method stub

		List<AppointmentDTO> appointmentDTOs = new ArrayList<>();

		List<Appointment> appointmentopt = appointmentRepo.findByDoctorId(id);
		for (Appointment appointment : appointmentopt) {
			appointmentDTOs.add(appointment.toDto(appointment));
		}

		return appointmentDTOs;	}

}