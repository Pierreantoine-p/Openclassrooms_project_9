package com.medilabo.note.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medilabo.note.entity.Note;
import com.medilabo.note.service.NoteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/note")
public class NoteController {

	private static final Logger logger = LogManager.getLogger(NoteController.class);

	@Autowired
	private NoteService noteService;

	@PostMapping("")
	public ResponseEntity<Note> save (@Valid @RequestBody Note note){
		try {
			noteService.save(note);
			return new ResponseEntity<>(note, HttpStatus.OK);	 
		}
		catch(Exception e) {
			logger.error(e);
			logger.error("Une erreur s'est produite lors de l'écriture de la note" );
			throw new RuntimeException("Une erreur est survenue");
		}
	}

	@GetMapping("/{patId}")
	public ResponseEntity<List<Note>> getNotes (@PathVariable String patId){
		try {
			List<Note> note = noteService.getNotes(patId);
			return new ResponseEntity<>(note ,HttpStatus.OK);	 
		}
		catch(Exception e) {
			logger.error(e);
			logger.error("Une erreur s'est produite lors de la récupération des notes de l'id: " + patId );
			throw new RuntimeException("Une erreur est survenue");
		}
	}
}
