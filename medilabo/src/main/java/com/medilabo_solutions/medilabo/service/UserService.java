package com.medilabo_solutions.medilabo.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;
import com.medilabo_solutions.medilabo.entity.User;
import com.medilabo_solutions.medilabo.repository.UserRepository;

import utils.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {
	private static final Logger logger = LogManager.getLogger(UserService.class);

	@Autowired
	private UserRepository userRepository;
	
	public List<User> all (){
		List<User> users = userRepository.findAll();
		System.out.println("users " + users);
		return users;
	}
	
	
	
	
	public void save(User user) {
		try {
			userRepository.save(user);
		}
		catch(Exception e) {
			logger.error("Une erreur s'est produite lors de l'ajout : ", e);
		}
	}
	
	public User getUser(String lastName, String firstName) {
		try {
		User user = userRepository.findByFirstNameAndLastName(lastName,firstName);
			if (user == null) {
	            throw new EntityNotFoundException("Utilisateur non trouvé pour le prénom " + firstName + " et le nom de famille " + lastName);
	        }
		return user;
		}
		catch(Exception e) {
			logger.error("Une erreur s'est produite avec la récupération de l'user : " + lastName + ","+ firstName, e);
			throw new RuntimeException("Une erreur est survenue");

		}
	}
	
	public User updateUser(String lastName, String firstName, User updatedUser) {
		try {
			User actualUser = userRepository.findByFirstNameAndLastName(firstName, lastName);
			actualUser.setAddress(updatedUser.getAddress());
			actualUser.setBirthdate(updatedUser.getBirthdate());
			actualUser.setGender(updatedUser.getGender());
			actualUser.setPhoneNumber(updatedUser.getPhoneNumber());
			userRepository.save(actualUser);
			
			return actualUser;
		}catch(Exception e) {
			logger.error("Une erreur s'est produite lors de la mise à jour de  l'user : " +  lastName + "," + firstName, e);
			throw new RuntimeException("Une erreur est survenue");
		}
	}
}
