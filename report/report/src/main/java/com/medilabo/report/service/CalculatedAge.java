package com.medilabo.report.service;

import java.time.LocalDate;

import java.time.Period;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

import com.medilabo.report.entity.User;

@Service
public class CalculatedAge {
	
	public int getAge(User user) {
		LocalDate currentDate = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate dateOfBirth = LocalDate.parse(user.getBirthDate(), formatter);

		Period age = Period.between(dateOfBirth, currentDate);
		return age.getYears();
	}
}

