package com.medilabo.note.repository;

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

import com.medilabo.note.controller.NoteController;
import com.medilabo.note.entity.Note;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ActiveProfiles("test")
public class NoteRepositoryTest {


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
		
		List<Note> result = noteRepository.findAll();
		assertEquals(note.getNote() , result.get(0).getNote() );

	}
	
	@Test
	@Order(2)
	public void testAddNote() {
		
		addNote.setPatid("1");
		addNote.setNote("note_2");
		addNote.setPatient(null);
		
		Note result = noteRepository.save(addNote);

		assertEquals(addNote.getNote(), result.getNote() );

	}


}
