package com.medilabo.note.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import com.medilabo.note.entity.Note;
import com.medilabo.note.repository.NoteRepository;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ActiveProfiles("test")
public class NoteControllerTest {

	@Autowired
	private NoteController noteController;


	@Autowired
	private NoteRepository noteRepository;

	private Note note = new Note();
	private Note addNote = new Note();

	@BeforeAll
	void createUser() {
		note.setPatid("1");
		note.setNote("note");
		note.setPatient(null);

		noteRepository.save(note);
	}
	
	@AfterAll
	void cleanUp() {
		noteRepository.deleteAll();
	}
	
	@Test
	@Order(1)
	public void testGetListNote() {
		
		HttpStatus expectedResponse = HttpStatus.OK;

		ResponseEntity<List<Note>> result = noteController.getNotes(note.getPatid());
		assertEquals(expectedResponse , result.getStatusCode() );

	}
	
	@Test
	@Order(2)
	public void testAddNote() {
		
		HttpStatus expectedResponse = HttpStatus.OK;

		addNote.setPatid("1");
		addNote.setNote("note");
		addNote.setPatient(null);
		
		ResponseEntity<Note> result = noteController.save(addNote);

		assertEquals(expectedResponse, result.getStatusCode() );

	}

}
