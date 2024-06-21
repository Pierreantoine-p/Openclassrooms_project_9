package com.medilabo.note.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medilabo.note.entity.Note;
import com.medilabo.note.repository.NoteRepository;

@Service
public class NoteService {

	private static final Logger logger = LogManager.getLogger(NoteService.class);

	@Autowired
	private NoteRepository noteRepository;

	public void save(Note body) {
		try {
			System.out.println("here : " );
			 noteRepository.save(body) ;
		}catch(Exception e) {
			logger.error("error :" + e);
			logger.error("Une erreur s'est produite lors de la sauvegarde de la note " );
			throw new RuntimeException("Une erreur est survenue");
		}
	}

	public List<Note> getNotes (String patId) {
		try {
			List<Note> noteList = noteRepository.findByPatid(patId);
			return noteList;
			 
		}catch(Exception e) {
			logger.error("error :" + e);
			logger.error("Une erreur s'est produite lors de la sauvegarde de la note pour l'id : " + patId);
			throw new RuntimeException("Une erreur est survenue");
		}
	}
}

