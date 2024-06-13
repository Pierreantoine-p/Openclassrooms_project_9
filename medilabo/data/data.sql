CREATE DATABASE IF NOT EXISTS medilabo;

use medilabo;

CREATE TABLE User(
  	Id integer NOT NULL AUTO_INCREMENT,
	first_name NOT NULL VARCHAR(125),
	last_name NOT NULL VARCHAR(125),
	birth_date NOT NULL VARCHAR(125),
	gender NOT NULL VARCHAR(125),
	address VARCHAR(125),
	phone_number VARCHAR(125),
	
	  PRIMARY KEY (Id)
);
INSERT INTO User(first_name, last_name, birth_date, gender, address, phone_number) values("TestNone","Test","1966-12-31", "F", "1 Brookside St", "100-222-3333");
	INSERT INTO User(first_name, last_name, birth_date, gender, address, phone_number) values("TestBorderline","Test","1945-06-24", "M", "2 High St", "200-333-4444");
	INSERT INTO User(first_name, last_name, birth_date, gender, address, phone_number) values("TestInDanger","Test","2004-06-18", "M", "3 Club Road", "300-444-5555");
	INSERT INTO User(first_name, last_name, birth_date, gender, address, phone_number) values("TestEarlyOnset","Test","2002-06-28", "F", "4 Valley Dr", "400-555-6666");