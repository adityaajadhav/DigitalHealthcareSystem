//
//package com.healthcare.app.test;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.aspectj.lang.annotation.Before;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.healthcare.app.dto.DoctorDTO;
//import com.healthcare.app.entity.Doctor;
//import com.healthcare.app.entity.Hospital;
//import com.healthcare.app.repository.DoctorRepository;
//import com.healthcare.app.service.DoctorService;
//
//@SpringBootTest
//class TestDoctor {
//	 @InjectMocks
//	    DoctorService service;
//	     
//	    @Mock
//	    DoctorRepository repository;
//	 
//	    @Before
//	    public void init() {
//	        MockitoAnnotations.initMocks(this);
//	    }
//	     
////	    @Test
////	    public void getAllEmployeesTest()
////	    {
////	    	List<DoctorDTO> doctorDTO = new ArrayList<DoctorDTO>();
////			Doctor doctor=new Doctor();
////	    	doctor.setActive(true);
////			doctor.setId(1L);
////			doctor.setEmailId("aditya10@gmail.com");
////			doctor.setFirstName("Aditya");
////			doctor.setLastName("Jadhav");
////			doctor.setPassword("aditya10aj");
////			doctor.setQualification("MD");
////			doctor.setSpeciality("radiologist");
////			Hospital hospital = new Hospital();
////			hospital = hospital.toEntity(doctorDTO.getHospital());
////			doctor.setHospital(hospital);
////
////	    	
////	    	DoctorDTO doctorOne = new DoctorDTO();
////	    	DoctorDTO doctorTwo = new DoctorDTO(2,);
////	    	DoctorDTO doctorThree = new DoctorDTO();
////	         
////	        list.add(doctorOne);
////	        list.add(doctorTwo);
////	        list.add(doctorThree);
////	         
////	        when(repository.getEmployeeList()).thenReturn(list);
////	         
////	        //test
////	        List<EmployeeVO> empList = manager.getEmployeeList();
////	         
////	        assertEquals(3, empList.size());
////	        verify(dao, times(1)).getEmployeeList();
////	    }
////	     
//	    @Test
//	    public void findDoctorByIdTest()
//	    {
//	        when(repository.findById(1L).thenReturn(new DoctorDTO(1,"aditya10@gmail.com","Adi","Jadhav","12345aj","MD","Radiologist",1));
//	         
//	        EmployeeVO emp = manager.getEmployeeById(1);
//	         
//	        assertEquals("Lokesh", emp.getFirstName());
//	        assertEquals("Gupta", emp.getLastName());
//	        assertEquals("user@email.com", emp.getEmail());
//	    }
//	     
//	    @Test
//	    public void saveDoctorTest()
//	    {
//	        EmployeeVO emp = new EmployeeVO(1,"Lokesh","Gupta","user@email.com");
//	         
//	        manager.addEmployee(emp);
//	         
//	        verify(dao, times(1)).addEmployee(emp);
//	    }
//	}
//}
