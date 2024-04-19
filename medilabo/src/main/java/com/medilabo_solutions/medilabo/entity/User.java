package com.medilabo_solutions.medilabo.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "user")
@Data
@NoArgsConstructor
public class User {

	@Id
	private String id;
	private String firstName;
	private String lastName;
	private String birthdate;
	private String gender;
	private String address;
	private String phoneNumber;
}
