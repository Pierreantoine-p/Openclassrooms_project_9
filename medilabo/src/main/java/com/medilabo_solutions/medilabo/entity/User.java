package com.medilabo_solutions.medilabo.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "Id")
	private Integer id;

	@NotBlank(message = "The first  field must be filled in.")
	@Column(name = "first_name")
	private String firstName;

	@NotBlank(message = "The Last Name field must be filled in.")
	@Column(name = "last_name")
	private String lastName;

	@NotBlank(message = "The birthDate field must be filled in.")
	@Column(name = "birth_date")
	private String birthDate;

	@NotBlank(message = "The gender field must be filled in.")
	private String gender;

	private String address;

	@Column(name = "phone_number")
	private String phoneNumber;

}	
