package com.medilabo.report.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medilabo.report.entity.Note;
import com.medilabo.report.entity.User;
import com.medilabo.report.entity.Status;
import com.medilabo.report.service.CalculatedStatus;
import com.medilabo.report.service.NoteClient;
import com.medilabo.report.service.ReportService;
import com.medilabo.report.service.UserClient;


@CrossOrigin
@RestController
@RequestMapping("/report")
public class ReportController {
	private static final Logger logger = LogManager.getLogger(ReportController.class);

	@Autowired
	private ReportService reportService;
	
	@Autowired
	private NoteClient noteClient;

	@Autowired
	private UserClient userClient;
	
	@Autowired
	private CalculatedStatus calculatedStatus;
	
	private User user;
	private List<Note> notes;

	@GetMapping("/{firstName}/{lastName}")
	public ResponseEntity<Status> report(@PathVariable String firstName, @PathVariable String lastName){
		try {

			user = userClient.getUserByName(firstName, lastName);

			notes = noteClient.getNotebyId(user.getId().toString());

			Integer triggers = reportService.calculatedTrigger(notes);

			Status status = calculatedStatus.definedStatus(triggers, user);

			return new ResponseEntity<>(status, HttpStatus.OK);	 

		}catch(Exception e) {
			logger.error("Une erreur s'est produite lors de l'ajout : ", e);
			throw new RuntimeException("Une erreur est survenue");
		}
	}
}

