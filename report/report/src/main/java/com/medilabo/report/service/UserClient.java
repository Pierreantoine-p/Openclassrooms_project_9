package com.medilabo.report.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.medilabo.report.entity.User;

@FeignClient(name = "user-client",url = "http://localhost:8080")
public interface UserClient {

	@GetMapping("/user/{firstName}/{lastName}")
	User getUserByName(@PathVariable ("firstName") String firstName, @PathVariable ("lastName") String lastName);

	//void create(User user);
}
