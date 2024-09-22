package com.medilabo.report.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

import com.medilabo.report.entity.User;

@FeignClient(name = "user-client",url = "http://gateway:8080")
public interface UserClient {

	@GetMapping("/user/{firstName}/{lastName}")
	User getUserByName(@PathVariable ("firstName") String firstName, @PathVariable ("lastName") String lastName,  @RequestHeader("Authorization") String token);

}
