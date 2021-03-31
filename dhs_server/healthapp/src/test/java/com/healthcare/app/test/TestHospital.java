//package com.healthcare.app.test;
//
//import static org.junit.Assert.assertNull;
//
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.junit.MockitoJUnitRunner;
//
//import com.healthcare.app.entity.Hospital;
//import com.healthcare.app.repository.HospitalRepository;
//import com.healthcare.app.service.HospitalService;
//
////@SpringBootTest
//@RunWith(MockitoJUnitRunner.class)
//public class TestHospital {
//	@InjectMocks
//	HospitalService hospitalService;
//
//	@Mock
//	HospitalRepository repository;
//
//
//@Test
//public void findHospitalById(){
//	Hospital hospital = new Hospital();
//	hospital.setId(1L);
//	hospital.setEmailId("hospitals@email.com");
//	hospital.setHospitalName("hospital");
//	hospital.setHospitaladdress("Nashik");
//	hospital.setHospitalContactNo("2345576878");
//	Mockito.when(repository.findHospitalById(1L)).thenReturn(hospital);
//
//
////)Mockito.when(countryRepository.findRegionByCountryId(countryId)).thenReturn(regionList);
////	HospitalDTO hospitalDTO = new HospitalDTO();
////	hospitalDTO.setEmailId(hospital.getEmailId());
////	hospitalDTO.setHospitalName(hospital.getHospitalName());
////	hospitalDTO.setHospitaladdress(hospital.getHospitaladdress());
////	hospitalDTO.setHospitalContactNo(hospital.getHospitalContactNo());
////	hospitalDTO.setId(hospital.getId());
//	try {
////	HospitalDTO actualHospitalDTO=
////		hospitalService.findHospitalById(1L);
////		assertEquals(hospitalDTO,actualHospitalDTO);
//assertNull("objectIsNull","hospital");
//	}catch(Exception e){
//		e.printStackTrace();
//	}
//}
//}
