package com.medilabo_solutions.medilabo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.medilabo_solutions.medilabo.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	User findByFirstNameAndLastName(String firstName, String lastName);
}
