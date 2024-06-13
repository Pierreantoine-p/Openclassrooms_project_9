package com.medilabo_solutions.medilabo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medilabo_solutions.medilabo.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	User findByFirstNameAndLastName(String firstName, String lastName);
}
