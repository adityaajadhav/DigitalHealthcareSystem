package com.healthcare.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.healthcare.app.dto.AdminDTO;

@Entity
@Table(name="admin")
public class Admin {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String firstName;
	private String lastName;
	@Column(nullable = false, unique = true)
	private String emailId;
	private String password;
	
	
	public Admin() {
		
	}
	public Admin(Long id, String firstName, String lastName, String emailId, String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Admin toEntity(AdminDTO adminDTO) {
		Admin admin = new Admin();
		admin.setEmailId(adminDTO.getEmailId());
		admin.setFirstName(adminDTO.getFirstName());
		admin.setLastName(adminDTO.getLastName());
		admin.setPassword(adminDTO.getPassword());
		admin.setId(adminDTO.getId());	
		return admin;
	}

	public AdminDTO toDTO(Admin admin) {
		AdminDTO adminDTO = new AdminDTO();
		adminDTO.setEmailId(admin.getEmailId());
		adminDTO.setFirstName(admin.getFirstName());
		adminDTO.setLastName(admin.getLastName());
		adminDTO.setPassword(admin.getPassword());
		adminDTO.setId(admin.getId());	
		return adminDTO;
	}

	
}
