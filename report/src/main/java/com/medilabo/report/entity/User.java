package com.medilabo.report.entity;



import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class User {

	private Integer id;
	private String firstName;
	private String lastName;
	private String birthDate;
	private String gender;
	private String address;
	private String phoneNumber;
}	
