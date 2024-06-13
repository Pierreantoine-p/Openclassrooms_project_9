package com.medilabo.report.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medilabo.report.entity.Status;
import com.medilabo.report.entity.User;

@Service
public class CalculatedStatus {

	@Autowired
	private CalculatedAge calculatedAge;

	public Status definedStatus(Integer trigger, User user) {
		
		Status healthStatus = Status.NONE;
		
		int age = calculatedAge.getAge(user);
		
		boolean isAgeMoreThan30 = (age > 30) ;	
		boolean isAgeLessThan30 = (age < 30) ;
		
		String gender = user.getGender();		

		if(trigger >= 2 && trigger <= 5 && isAgeMoreThan30) {
			healthStatus = Status.BORDERLINE;

		}else if(gender.equals("M") && isAgeLessThan30 && trigger >= 3) {
			healthStatus = Status.INDANGER;

		}else if(gender.equals("F") && isAgeLessThan30 && trigger >= 4) {
			healthStatus = Status.INDANGER;

		}else if(isAgeMoreThan30 && trigger >= 7) {
			healthStatus = Status.INDANGER;

		}else if(gender.equals("M") && isAgeLessThan30 && trigger >= 5) {
			healthStatus = Status.EARLYONSET;

		}else if(gender.equals("F") && isAgeLessThan30 && trigger >= 7) {
			healthStatus = Status.EARLYONSET;

		}else if(isAgeMoreThan30 && trigger >= 8) {
			healthStatus = Status.EARLYONSET;
		}
		return healthStatus;
	}


}
