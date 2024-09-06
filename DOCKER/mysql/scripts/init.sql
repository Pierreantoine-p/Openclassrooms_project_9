CREATE DATABASE IF NOT EXISTS medilabo_db;

USE medilabo_db;

DROP TABLE IF EXISTS user;

CREATE TABLE user(
  	Id integer NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(125) NOT NULL ,
	last_name VARCHAR(125) NOT NULL ,
	birth_date VARCHAR(125) NOT NULL ,
	gender VARCHAR(125) NOT NULL ,
	address VARCHAR(125),
	phone_number VARCHAR(125),
	
	  PRIMARY KEY (Id)
);
INSERT INTO user(first_name, last_name, birth_date, gender, address, phone_number) values("TestNone","Test","1966-12-31", "F", "1 Brookside St", "100-222-3333");
	INSERT INTO user(first_name, last_name, birth_date, gender, address, phone_number) values("TestBorderline","Test","1945-06-24", "M", "2 High St", "200-333-4444");
	INSERT INTO user(first_name, last_name, birth_date, gender, address, phone_number) values("TestInDanger","Test","2004-06-18", "M", "3 Club Road", "300-444-5555");
	INSERT INTO user(first_name, last_name, birth_date, gender, address, phone_number) values("TestEarlyOnset","Test","2002-06-28", "F", "4 Valley Dr", "400-555-6666");