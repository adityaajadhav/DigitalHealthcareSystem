package com.healthcare.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthcare.app.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
	@Query("Select a from Admin a where a.emailId= :emailId and a.password= :password")
	Optional<Admin> findEmailAndPassword(String emailId, String password);
}
