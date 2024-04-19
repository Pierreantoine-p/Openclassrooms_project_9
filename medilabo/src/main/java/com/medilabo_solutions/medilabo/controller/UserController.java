package com.medilabo_solutions.medilabo.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medilabo_solutions.medilabo.entity.User;
import com.medilabo_solutions.medilabo.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	private static final Logger logger = LogManager.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@GetMapping()
	public ResponseEntity<List<User>> all (){
		
			List<User> users = userService.all();
			return new ResponseEntity<>(users,HttpStatus.OK);	 
		
	}

	
	
	@PostMapping("/add")
	public ResponseEntity<User> save (@RequestBody User user){
		try {
			userService.save(user);
			return new ResponseEntity<>(user,HttpStatus.OK);	 
		}
		catch(Exception e) {
			logger.error("Une erreur s'est produite lors de l'ajout : ", e);
			throw new RuntimeException("Une erreur est survenue");
		}
	}

	@GetMapping("/{firstName}/{lastName}")
	public ResponseEntity<User> getUser (@PathVariable String lastName, @PathVariable String firstName){
		try {
			User user = userService.getUser(lastName,firstName);
			System.out.println("hello there : " + user );
			return new ResponseEntity<>(user ,HttpStatus.OK);	 
		}
		catch(Exception e) {
			logger.error("Une erreur s'est produite avec l'user : " + lastName + "," + firstName, e);
			throw new RuntimeException("Une erreur est survenue");
		}
	}

	@PostMapping("/update/{id}")
	public ResponseEntity<User> updateUser (@PathVariable String lastName, @PathVariable String firstName, @RequestBody User updatedUser){
		try {
			User user = userService.updateUser(lastName,firstName , updatedUser);
			return new ResponseEntity<>(updatedUser,HttpStatus.OK);
		}catch(Exception e) {
			logger.error("Une erreur s'est produite lors de la mise à jour de  l'user : " +  lastName + "," + firstName, e);
			throw new RuntimeException("Une erreur est survenue");
		}	 
	}

}
