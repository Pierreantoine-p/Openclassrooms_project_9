package com.medilabo_solutions.medilabo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.medilabo_solutions.medilabo"})
public class MedilaboApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedilaboApplication.class, args);
	}

}
