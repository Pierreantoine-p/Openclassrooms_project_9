package com.medilabo_solutions.medilabo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Order;
import org.springframework.http.HttpStatus;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import com.medilabo_solutions.medilabo.entity.User;
import com.medilabo_solutions.medilabo.repository.UserRepository;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ActiveProfiles("test")
public class UserControllerTest {

	  	@Autowired
	    private UserController userController;
	  	
	  	 @Autowired
	     private UserRepository userRepository;
	  	
		private User user = new User();
		private User addUser = new User();
		private User updateUser = new User();

		
		@BeforeAll
		void createUser() {
			user.setFirstName("a"); 
			user.setLastName("a");
			user.setGender("h");
			user.setPhoneNumber("0000000000");
			user.setAddress("address");
			user.setBirthDate("01/01/0001");
			
			userRepository.save(user);
		}
		
		@AfterAll
		void cleanUp() {
			userRepository.deleteAll();
		}

		@Test
		@Order(1)
		public void testGetUser() {
			
			HttpStatus expectedResponse = HttpStatus.OK;

			ResponseEntity<User> result = userController.getUser("a", "a");
			assertEquals(expectedResponse , result.getStatusCode() );

		}
		
		@Test
		@Order(2)
		public void testUpdateUser() {
			
			HttpStatus expectedResponse = HttpStatus.OK;

			updateUser.setFirstName("a"); 
			updateUser.setLastName("a");
			updateUser.setGender("h");
			updateUser.setPhoneNumber("1111111111");
			updateUser.setAddress("address_2");
			updateUser.setBirthDate("01/01/0001");
			
			ResponseEntity<User> result = userController.updateUser(updateUser);

			assertEquals(expectedResponse, result.getStatusCode() );

		}
		
		@Test
		@Order(3)
		public void testAddUser() {
			HttpStatus expectedResponse = HttpStatus.OK;

			addUser.setFirstName("b"); 
			addUser.setLastName("b");
			addUser.setGender("h");
			addUser.setPhoneNumber("0000000000");
			addUser.setAddress("address");
			addUser.setBirthDate("01/01/0001");
			userRepository.save(addUser);

			ResponseEntity<User> result = userController.save(addUser);
			
			assertEquals(expectedResponse, result.getStatusCode() );

		}
}
