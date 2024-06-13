package com.medilabo.report.service;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.cloud.openfeign.FeignClient;

import com.medilabo.report.entity.Note;

@FeignClient(name = "note-client",url = "http://localhost:8080")
public interface NoteClient {
	
		@GetMapping("/note/{patId}")
		List<Note> getNotebyId(@PathVariable ("patId") String patId);
	

}
